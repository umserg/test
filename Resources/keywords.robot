*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${LOGIN_URL}  http://localhost:8080/login
${BROWSER}    Chrome

*** Keywords ***
Open Browser To Login Page
    Open Browser  ${LOGIN_URL}  ${BROWSER}
    Maximize Browser Window

Input Username
    [Arguments]  ${username}
    Input Text  id=username  ${username}

Input Password
    [Arguments]  ${password}
    Input Text  id=password  ${password}

Click Element
    [Arguments]  ${locator}
    Wait Until Element Is Visible  ${locator}  5s
    SeleniumLibrary.Click Element  ${locator}  # ✔ Виклик без рекурсії!

Verify Successful Login
    Wait Until Page Contains    Панель    5s
 
