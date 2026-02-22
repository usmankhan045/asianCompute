# Start Dev Server - Clean Start Script
Write-Host "=== Cleaning up before starting ===" -ForegroundColor Cyan

# Kill all Node processes
Write-Host "Stopping all Node processes..." -ForegroundColor Yellow
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Clear ports
Write-Host "Clearing ports 3000, 3001, 3002..." -ForegroundColor Yellow
$ports = @(3000, 3001, 3002)
foreach ($port in $ports) {
    $connections = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
    foreach ($conn in $connections) {
        Stop-Process -Id $conn.OwningProcess -Force -ErrorAction SilentlyContinue
    }
}
Start-Sleep -Seconds 1

# Clear cache
Write-Host "Clearing Next.js cache..." -ForegroundColor Yellow
if (Test-Path .next) {
    Remove-Item -Path .next -Recurse -Force -ErrorAction SilentlyContinue
}

# Check available port
Write-Host "`nChecking available ports..." -ForegroundColor Cyan
$availablePort = $null
foreach ($port in @(3002, 3001, 3000)) {
    $inUse = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
    if (-not $inUse) {
        $availablePort = $port
        Write-Host "Port $port is available!" -ForegroundColor Green
        break
    } else {
        Write-Host "Port $port is in use" -ForegroundColor Red
    }
}

if ($availablePort) {
    Write-Host "`n=== Starting dev server on port $availablePort ===" -ForegroundColor Green
    Write-Host "Server will be available at: http://localhost:$availablePort" -ForegroundColor Cyan
    Write-Host "`nPress Ctrl+C to stop the server`n" -ForegroundColor Yellow
    
    $env:PORT = $availablePort
    npm run dev
} else {
    Write-Host "`nERROR: All ports (3000, 3001, 3002) are in use!" -ForegroundColor Red
    Write-Host "Please close other applications using these ports." -ForegroundColor Yellow
    Write-Host "`nOr manually kill processes:" -ForegroundColor Yellow
    Write-Host "Get-Process -Name node | Stop-Process -Force" -ForegroundColor White
}
