@echo off
set grandParentName=form-and-elements
set parentName=__comment
set /p fileName=What would you create?
set newStyleSCSS=form-and-elements__comment.scss
mkdir %fileName%
(
echo @import '%fileName%/form-and-elements__comment%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
