# oneseven-server  
Menu mobile app with react native for the frontend and nestjs for the backend.  

THIS IS THE SERVER FOR https://github.com/andreslanzi/oneseven-client.  

To run the server you need to:  

1- clone the project into your machine.  
2- install dependencies ( npm install )  
4- run server with "npm start".  

Important Informtion  
As I tested the app in my Iphone , I encountered some issues while trying to connect the Expo app with the server address.  
I changed the usual localhost:3000 url for my IPv4 Address (still in port 3000) to make it work. I think this is just to test in smartphones, not PCS  
You will need to update this address in your local machine at /src/main.ts (line 7) (line 19) Keep the 3000 port but update the ip to yours (if you are testing on a cellphone) or update it to localhost if you are testing on PC.
