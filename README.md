# NewsScraping 


#### a project to scrape data from the web, store it in a DB and display it on a dynamic website

Inspired by some projects at work, I had always planned to create and deploy my own (web) application. 

Following my project about scraping newspaper articles about German soccer articles, I wondered if I could make use of the data in some way, so I decided to put it in a database and display the data in a working application as a first step. This is what you see in this project.

This project use a flask backend, a react frontend and a MongoDB database. There is a Dockerfile associated with each frontend and backend, and a docker-compose.yml to orchestrate both parties.

The web-scraping is currently done by a separate python script, which stores the scraped data in a MongoDB NoSQL Database.

#### What exactly does it do?

- (previously:) web scraping newspaper headlines and teasers from a large German newspaper, storing them into a MongoDB NoSQL Database
- tbd.: create a sentiment score / polarity from the content
- access the content of the database via python flask backend 
- display the content as a simple table via react frontend

