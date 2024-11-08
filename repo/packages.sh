cd "`dirname \"$0\"`"
REPOROOT=$(pwd)
#echo $REPOROOT


dpkg-scanpackages ./Files/ > Packages
bzip2 -fks Packages
