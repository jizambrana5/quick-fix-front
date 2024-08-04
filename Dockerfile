# Usa una imagen base oficial de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Expone el puerto en el que la aplicación correrá
EXPOSE 3000

# Define el comando por defecto para correr la aplicación
CMD ["npm", "run", "preview"]
