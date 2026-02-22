# Fix Next.js Dev Server Issues
Write-Host "Stopping all Node processes..." -ForegroundColor Yellow
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

Write-Host "Clearing Next.js cache..." -ForegroundColor Yellow
Remove-Item -Path .next -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path node_modules/.cache -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Checking for port conflicts..." -ForegroundColor Yellow
$ports = @(3000, 3001, 3002)
foreach ($port in $ports) {
    $connection = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
    if ($connection) {
        Write-Host "Port $port is in use" -ForegroundColor Red
    } else {
        Write-Host "Port $port is available" -ForegroundColor Green
    }
}

Write-Host "`nStarting dev server on port 3002..." -ForegroundColor Green
$env:PORT = "3002"
npm run dev
