## Satoshi Systems

## Enhancement/Problems

- DataView can't fetch backend caused by mixed content issue  security (backend is in http)
- We can register but login will not work for the moment.

## Test

- Front register page : http://20.42.33.59/
- Front dataview: https://dataview.eastus.cloudapp.azure.com/
- Backend: http://52.146.54.126/

- I used an Azure account as demanded

-This PWA can be installed in the mobile device

- I used a personal mongo database hosted in Atlas and i integrated to backend

Database Satoshi with privilege for 1 week.

DataView container is running in nginx server and also implemented a self signed certificated but it's seems that we need more security in order to use
the serviceWorker. 

## Result Lighthouse test

![](https://i.imgur.com/WAh820W.png)