# Etapa de construcción
FROM node:16 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Establece la variable de entorno antes de la construcción
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

RUN npm run build

# Etapa de producción
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
