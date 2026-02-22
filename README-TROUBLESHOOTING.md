# Troubleshooting Dev Server Issues

## If Dev Server Gets Stuck at "Starting..."

### Quick Fix Steps:

1. **Kill all Node processes:**
   ```powershell
   Get-Process -Name node | Stop-Process -Force
   ```

2. **Clear Next.js cache:**
   ```powershell
   Remove-Item -Path .next -Recurse -Force
   Remove-Item -Path node_modules/.cache -Recurse -Force
   ```

3. **Try a different port:**
   ```powershell
   npm run dev:3001
   # or
   npm run dev:3002
   ```

4. **Run the fix script:**
   ```powershell
   .\fix-dev-server.ps1
   ```

### Common Issues on Windows:

1. **File Watcher Limits:** Windows has file watcher limits. The webpack config has been updated to use polling.

2. **Port Conflicts:** Make sure ports 3000, 3001, or 3002 are not in use by other applications.

3. **Antivirus:** Sometimes antivirus software can interfere with file watching. Try adding the project folder to exclusions.

4. **Long Initial Compile:** First run can take 1-2 minutes. Be patient!

### Alternative: Use Turbo Mode

If issues persist, try:
```powershell
npm run dev -- --turbo
```

### Check if Server is Actually Running

Even if it says "Starting...", try opening:
- http://localhost:3000
- http://localhost:3001  
- http://localhost:3002

The server might be running but the terminal output is delayed.
