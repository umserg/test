*** Settings ***
Library  SeleniumLibrary
Resource  ../Resources/keywords.robot

*** Test Cases ***
Login Test
    [Documentation]  Перевірка авторизації користувача
    Open Browser To Login Page
    Input Username  testUser
    Input Password  !Pasword2025
    Click Element    xpath=//input[@type='submit'][@value='Вхід']
    Verify Successful Login
