@echo off
echo ==========================================
echo   Nisar Ahmed Portfolio - GitHub Deploy
echo ==========================================
echo.
echo [Step 1] Initializing Git...
git init
git add .
git commit -m "Initial commit - Portfolio V1"
git branch -M main

echo.
echo [Step 2] Linking to GitHub...
echo ----------------------------------------------------------------
echo PLEASE PASTE YOUR NEW GITHUB REPOSITORY URL BELOW.
echo (Example: https://github.com/nisar46/portfolio.git)
echo ----------------------------------------------------------------
set /p RepoUrl="Repository URL: "

git remote remove origin
git remote add origin %RepoUrl%

echo.
echo [Step 3] Pushing to GitHub...
git push -u origin main

echo.
echo ==========================================
echo   SUCCESS! 
echo   Now go to GitHub Repository > Settings > Pages
echo   and select 'main' branch to go live.
echo ==========================================
pause
