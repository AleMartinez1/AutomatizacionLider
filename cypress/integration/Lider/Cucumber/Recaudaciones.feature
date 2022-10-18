Feature: Feature Recaudaciones

    Adaptando casos de prueba desde POM hacia cucumber

    Scenario Outline: Scenario Outline name: Scenario Pagar monto FACTURADO del mes
    Given un usuario que desea pagar su estado de cuenta
    And selecciona pagar el monto facturado mensual
    And ingresa su correo electronico <mail>
    When presiona siguiente
    #Then el usuario debe seleccionar el banco
    #And presiona siguiente

 Examples:
        | mail |
        | abc@gmail.com |
        | abc123@gmail.com |
        | abc456@gmail.com |
        | abc789@gmail.com |