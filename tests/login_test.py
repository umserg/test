import unittest
from selenium import webdriver
from pages.login_page import LoginPage

class LoginTest(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:8080/login")
        self.page = LoginPage(self.driver)

    def test_login(self):
        self.page.enter_username("testUser")
        self.page.enter_password("!Pasword2025")
        self.page.click_login()

        # Робимо скріншот після входу
        self.driver.save_screenshot("screenshots/dashboard.png")

        # Перевіряємо, чи є текст "Панель" на сторінці
        self.assertTrue("Панель" in self.driver.page_source)

    def tearDown(self):
        self.driver.quit()

