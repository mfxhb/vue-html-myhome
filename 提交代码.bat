@echo off
set year=%date:~0,4%
set mon=%date:~5,2%
set day=%date:~8,2%
set zhou=%date:~10,6%
set h=%time:~0,2%
set m=%time:~3,2%
set s=%time:~6,2%
set comtxt=%year%��%mon%��%day%��-%h%ʱ%m%��%s%��-%zhou%
cd BORINGGHOST
git add .
git commit -m "%comtxt%"
git push origin master
pause