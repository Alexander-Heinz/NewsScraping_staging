
FROM python:3.8-slim

#RUN adduser -D news_scraping

#RUN apk update && apk upgrade
#RUN mkdir -p /backend

#WORKDIR /backend/


# switch working directory
WORKDIR /app


COPY requirements.txt requirements.txt


RUN python -m venv venv
ENV PATH="/venv/bin:$PATH"
RUN pip install --upgrade pip
RUN pip install numpy
RUN pip install -r requirements.txt
RUN pip install wheel
RUN pip install gunicorn
#RUN pip install gevent


COPY app app
COPY app.py config.py ./


ENV FLASK_APP app.py


#RUN chown -R news_scraping:news_scraping ./


#USER inno_app


EXPOSE 5000
#CMD ["gunicorn", "-b", ":5000", "app:app"]
CMD ["gunicorn", "-b", ":5000", "app:create_app()"]

# CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
#CMD gunicorn -b :5000 --timeout 120 --workers=2 --threads=2 --worker-class=gevent --worker-connections=100 app:app