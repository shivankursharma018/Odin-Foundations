
# Odin-Foundation

git clone <URL-of-Project-Main>
cd Project-Main
git remote add project1 <URL-of-Project1>
git fetch project1

git checkout -b project1-branch
git read-tree --prefix=project1/ -u project1/master
git commit -m "Merged Project1 into Project-Main"

git checkout main
git merge project1-branch

git branch -d project1-branch
git remote remove project1

git push origin main
