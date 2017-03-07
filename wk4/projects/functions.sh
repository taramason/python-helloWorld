new-web-project(){
  printf "%s\n" "Building a new web project"
  mkdir $1
  cd $1
  touch index.html
  touch styles.css
  touch index.js
  atom .
}
