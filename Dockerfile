FROM mcr.microsoft.com/playwright:v1.39.0-jammy

WORKDIR /tests

COPY . .

RUN npm install && npx playwright install

CMD ["npx", "playwright", "test"]
