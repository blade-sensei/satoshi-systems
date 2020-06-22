FROM nginx:alpine
COPY /build /usr/share/nginx/html
EXPOSE 80
ENV NODE_ENV production
CMD ["nginx", "-g", "daemon off;"]