
# Odin-Foundation

| Project                 | Topic             | Repository                                                                   | Live Preview                                                       |
| ----------------------- | ----------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Recipes 4.0**         | HTML Foundations  | [Code](https://github.com/shivankursharma018/Odin-Foundations/tree/main/recipes)  | [Demo](https://shivankursharma018.github.io/Odin-Foundations/recipes/)|
| **Landing Page**        | Flexbox           | [Code](https://github.com/shivankursharma018/Odin-Foundations/tree/main/landing-page)  | [Demo](https://shivankursharma018.github.io/Odin-Foundations/landing-page/)|
| **Rock Paper Scissors** | JavaScript Basics | [Code](https://github.com/shivankursharma018/Odin-Foundations/tree/main/rock-paper-scissors)      | [Demo](https://shivankursharma018.github.io/Odin-Foundations/rock-paper-scissors/)|
| **Etch-a-Sketch**       | JavaScript Basics | [Code](https://github.com/shivankursharma018/Odin-Foundations/tree/main/etch-a-sketch) | [Demo](https://shivankursharma018.github.io/Odin-Foundations/etch-a-sketch/)|
| **Calculator**          | JavaScript Basics | [Code](https://www.github.com/shivankursharma018/Odin-Foundations/tree/main/calculator/)    | [Demo](https://shivankursharma018.github.io/Odin-Foundations/calculator/)|

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
