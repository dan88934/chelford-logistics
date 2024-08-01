import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
# from selenium.webdriver.support.ui import Select

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)
driver.get('http://127.0.0.1:5000/quote')

sender_name = driver.find_element_by_id("sender_name")
sender_name.click()
sender_name.send_keys('Dan Hughes')

time.sleep(5)
