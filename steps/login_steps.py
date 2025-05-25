from behave import given, when, then
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from pages.login_page import LoginPage

@given("Користувач відкриває сторінку логіну")
def step_open_login_page(context):
    context.driver = webdriver.Chrome()
    context.driver.get("http://localhost:8080/login")
    context.page = LoginPage(context.driver)

@when("Вводить логін testUser")
def step_enter_username(context):
    context.page.enter_username("testUser")

@when("Вводить пароль !Pasword2025")
def step_enter_password(context):
    context.page.enter_password("!Pasword2025")

@when('Натискає кнопку "Вхід"')
def step_click_login(context):
    context.page.click_login()

@then('Бачить заголовок "Панель"')
def step_verify_dashboard(context):
    """Перевіряємо, чи елемент з id='dashboard' з'явився на сторінці"""
    WebDriverWait(context.driver, 10).until(
        EC.presence_of_element_located((By.ID, "dashboard"))
    )
    context.driver.save_screenshot("screenshots/dashboard.png")
    assert "Панель" in context.driver.page_source

    context.driver.quit()
