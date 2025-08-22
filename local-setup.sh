sudo systemctl start docker
sudo usermod -aG docker $USER
docker pull mongo:7
docker run -d -p 27017:27017 --name lunos-blogging -v mongo-data:/data/db mongo:7
