# Mpritter
Live Code - Empritter (mini twitter)

# Usage
1. npm install
2. mkdir and edit .env
3. npm start
4. app running in port 3005

## API Endpoint 
|     Route       |       HTTP    | Description   |  
| -------------   | ------------- | ------------- |
| /api/signup/    | POST          | Signup User   |
| /api/signin/    | POST          | Sigin user    |
| /api/tweet/     | GET           | Get All tweet |
| /api/tweet/     | POST          | post twett    |
| /api/tweet/:id  | GET           | Get Hastag    |
| /api/tweet/:id  | DELETE        | Delete Twett  | 
| /api/users/:id  | GET           | Get profile by id |
| /api/users/:id  | PUT           | Update Profile |