@echo off
echo ==========================================
echo   Cleaning Up Repository for Recruiters
echo ==========================================
echo.

echo [1/3] Removing unused files from GitHub...
git rm --cached cv.html
git rm --cached deploy_portfolio.bat
git rm --cached Pages
del cv.html
del Pages

echo.
echo [2/3] Committing changes...
git add .
git commit -m "Cleanup: Removed internal scripts and legacy files"

echo.
echo [3/3] Pushing clean version to GitHub...
git push

echo.
echo ==========================================
echo   DONE! Repository is now clean.
echo   (You can delete this script now)
echo ==========================================
pause
