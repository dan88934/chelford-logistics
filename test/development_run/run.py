import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
# from selenium.webdriver.support.ui import Select

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)
driver.get('http://127.0.0.1:5000/quote')

sender_name = driver.find_element_by_id("sender_name")
sender_name.click()
sender_name.send_keys('Dan Hughes')

sender_address = driver.find_element_by_id("sender_address")
sender_address.click()
sender_address.send_keys('22 Example Road, Marple Bridge')

sender_city = driver.find_element_by_id("sender_city")
sender_city.click()
sender_city.send_keys('Stockport')

sender_country = driver.find_element_by_id("sender_country")
sender_country.click()
sender_country.send_keys('United Kingdom')

recipient_name = driver.find_element_by_id("recipient_name")
recipient_name.click()
recipient_name.send_keys('John Anderson')

recipient_address = driver.find_element_by_id("recipient_address")
recipient_address.click()
recipient_address.send_keys('112 Example Road')

recipient_city = driver.find_element_by_id("recipient_city")
recipient_city.click()
recipient_city.send_keys('Hull')

recipient_country = driver.find_element_by_id("recipient_country")
recipient_country.click()
recipient_country.send_keys('United Kingdom')

package_value = driver.find_element_by_id("package_value")
package_value.click()
package_value.send_keys('183.52')

contents_declaration = driver.find_element_by_id("contents_declaration")
contents_declaration.click()
contents_declaration.send_keys('Cookies')

despatch_date = driver.find_element_by_id("despatch_date")
despatch_date.click()
despatch_date.send_keys('02/08/2024')

insurance = driver.find_element_by_id("insurance")
# insurance.click()

submit_button = driver.find_element_by_id("submit")
submit_button.click()

time.sleep(1)

# Move to tracking page

order_reference_number = driver.find_element_by_id("pre")
reference_number = order_reference_number.text

quote_status = driver.find_element_by_id("quote-status")
quote_status.click()

time.sleep(1)

order_number = driver.find_element_by_id("order-number")
order_number.click()
order_number.send_keys(reference_number)

submit_button = driver.find_element_by_id("submit-btn")
submit_button.click()

# Open console

# actions = ActionChains(driver)
# actions.key_down(Keys.COMMAND).key_down(Keys.ALT).send_keys('k').key_up(Keys.ALT).key_up(Keys.COMMAND).perform()

time.sleep(30)
