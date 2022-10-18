Feature: Feature BDP

    Adaptando casos de prueba desde POM hacia cucumber

    Scenario Outline: Scenario Outline name: Scenario Cliente Pago exitoso
    Given un usuario que desea pagar su estado de cuenta
    And ingresa su fecha de expiracion <exp>
    And ingresa su cvv <cvv>
    And ingresa su pin <pin>
    And selecciona cantidad de cuotaas
    When presiona siguiente
    Then el usuario debe ingresar el segundo factor
    And ...

    Examples:
        | exp | cvv | pin | rut |
        | 26/04 | 637 | 6000 | 083074620 |
        | 26/04 | 514 | 1009 | 219929366 |