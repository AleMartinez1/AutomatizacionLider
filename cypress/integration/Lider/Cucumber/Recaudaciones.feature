Feature: Feature Recaudaciones

    Adaptando casos de prueba desde POM hacia cucumber

    Scenario: Scenario Pagar monto FACTURADO del mes
    Given el usuario desea pagar su estado de cuenta
    And selecciona pagar el monto facturado mensual
    And ingresa su correo electronico
    When presiona siguiente
    Then el usuario debe seleccionar el banco
    And presiona siguiente