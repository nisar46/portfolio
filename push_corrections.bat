@echo off
echo ==============================================
echo   PUSHING CORRECTIONS TO GITHUB
echo ==============================================

echo.
echo [1/2] Staging changes...
git add .

echo.
echo [2/2] Pushing to main branch...
git commit -m "Correction: Standardized terminology - removed Gauribidanur"
git push origin main

echo.
echo ==============================================
echo   DONE! Check your website in 1 minute.
echo ==============================================
pause
