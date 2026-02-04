@echo off
echo ==============================================
echo   UPDATING PORTFOLIO & CLEANING REPOSITORY
echo ==============================================

echo.
echo [1/4] Staging logo color changes...
git add .

echo.
echo [2/4] Removing junk files from GitHub...
git rm --cached --ignore-unmatch cv.html
git rm --cached --ignore-unmatch deploy_portfolio.bat
git rm --cached --ignore-unmatch clean_repo.bat
git rm --cached --ignore-unmatch Pages

echo.
echo [3/4] Committing changes...
git commit -m "Update: Colorful logos and clean repo"

echo.
echo [4/4] Pushing to GitHub...
git push

echo.
echo ==============================================
echo   SUCCESS! 
echo   1. Your logos are now colorful.
echo   2. Your repo is clean.
echo   
echo   You can close this window now.
echo ==============================================
pause
