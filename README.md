# courier_app

This is a redacted and simplified version of a logistics web app that I developed for a client in January 2024.

This application allows users to add orders to the database by filling in a form. Users are then given an order reference number. They can use this number to search for their order and see details about it on the search page. This includes the insurance charge, which is calculated on the backend using business logic which was provided to me.

In accordance with my confidentiality agreement with the client, I have changed the name and logo of the company and removed most of the backend functionality, including the integration with their third party tracking API.

There are frontend and backend tests included, utilizing Selenium and Unittest. These can be ran from the main directory with 'python -m unittest'.