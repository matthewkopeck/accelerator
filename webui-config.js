// Copyright (c) Microsoft. All rights reserved.

// This file is rewritten during the deployment.
// Values can be changed for development purpose.
// The file is public, so don't expect secrets here.

// eslint-disable-next-line
var DeploymentConfig = {
  authEnabled: true,
  authType: "aad",
  farmbeatsVersion: "$FARMBEATS_VERSION$",
  aad: {
    tenant: "$TENANT_ID$",
    appId: "$APP_ID$",
    instance: "https://login.microsoftonline.com/"
  },
  backendEndpoint: "$BACKEND_ENDPOINT$",
  tsiEndpoint: "$TSI_ENDPOINT$",
  azureMapsKey: "$AZURE_MAPS_KEY$",
  appInsightsInstrumentationKey: "$APP_INSIGHTS_INSTRUMENTATION_KEY$"
};

// SIG // Begin signature block
// SIG // MIIjjQYJKoZIhvcNAQcCoIIjfjCCI3oCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // OHHhlEU2DiWj+EtOfTjnf2AowesLPHVnnbamXB35rLWg
// SIG // gg2BMIIF/zCCA+egAwIBAgITMwAAAYdyF3IVWUDHCQAA
// SIG // AAABhzANBgkqhkiG9w0BAQsFADB+MQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMSgwJgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBT
// SIG // aWduaW5nIFBDQSAyMDExMB4XDTIwMDMwNDE4Mzk0N1oX
// SIG // DTIxMDMwMzE4Mzk0N1owdDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEeMBwGA1UEAxMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA
// SIG // zrfJC3Oz90+zCiIaLmB3sDBZp6vAMruxToWQkGm1cAad
// SIG // lUuFsgdkHuE0AU/Ggc5wDQxD4xyjXT0/F8+XDWpYulx3
// SIG // n0vIv1l7RdL0rD/DRL+pgR7gNqdX8NsAfxdHR7Cdxn2e
// SIG // XNLDyY5JbImKj8OfcSeeJDPdSDoIjtjlM4zQJYz4m4wl
// SIG // nx+1M0NUzx3OHcHopbPBhCK2wUW+yFsIjmy9do1k+GIe
// SIG // 9TUILyfRZ+vlIQ/cdrpN3S4/OL8LdTbhUIrSicSFdH1b
// SIG // ETUd2m0FTi6qQ7oG69EszS+qPMczhy+Tl4hhsIOnpIlw
// SIG // Nf9l12O8lRXN/bZXnQ7WY0ozW3sdc88ElwIDAQABo4IB
// SIG // fjCCAXowHwYDVR0lBBgwFgYKKwYBBAGCN0wIAQYIKwYB
// SIG // BQUHAwMwHQYDVR0OBBYEFIaL+GcjvemsZCXTI6c7ts1V
// SIG // ziXLMFAGA1UdEQRJMEekRTBDMSkwJwYDVQQLEyBNaWNy
// SIG // b3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEWMBQG
// SIG // A1UEBRMNMjMwMDEyKzQ1ODM4NTAfBgNVHSMEGDAWgBRI
// SIG // bmTlUAXTgqoXNzcitW2oynUClTBUBgNVHR8ETTBLMEmg
// SIG // R6BFhkNodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtp
// SIG // b3BzL2NybC9NaWNDb2RTaWdQQ0EyMDExXzIwMTEtMDct
// SIG // MDguY3JsMGEGCCsGAQUFBwEBBFUwUzBRBggrBgEFBQcw
// SIG // AoZFaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraW9w
// SIG // cy9jZXJ0cy9NaWNDb2RTaWdQQ0EyMDExXzIwMTEtMDct
// SIG // MDguY3J0MAwGA1UdEwEB/wQCMAAwDQYJKoZIhvcNAQEL
// SIG // BQADggIBAIsZskuhOr6a1g/ShTSAfRuc8jLiI2QDrlCd
// SIG // RCv1ZYOhW92R1441MAEyiHF2xbhQulq+Cja1OA2P7AVa
// SIG // pmm+QAv43t26VKY7caRMqlKrT3N9MBIP6zvb5ipqiqCz
// SIG // 09+7L3NjVQZhjZfvOajuH1f8OwseydAW6pNfSnETXY7e
// SIG // niqE50zxwR5VR0CB2aTMWnGxTgJCa6gFZGGXc+4pDV08
// SIG // VfhkW9+rQuAcjDcRNgxe7xXb2omT9AlWeQcidoAIVzHS
// SIG // vfrrMc1ZPdd6inXtTgLlnb/q53apACJvH1JUZ6+LGkgo
// SIG // O3CG1MAgn9desFCexLiQ4NLx3soZwnh5wW8h90WZBxIt
// SIG // qH5n4JxSEiWQ3TAHlWRlTodtCaedFwc6qJKT83mes3Nf
// SIG // 4MiCzcolYBPkT5I51ELIXdX9TzIJ97Z7Ngs+2yYlVGqh
// SIG // Dt5/akRYMuSbi2nulMHhnwHjqN3YC2cYpCs2LN4QzGhL
// SIG // SavCD+9XF+0F3upZzJl1Px3X89qfPe2XfpFPr2byiN3M
// SIG // C37lUICtkWds/inNyt3UT89q18nCuVwrkWZrxmm/1m62
// SIG // Ygu8CUGqYAaHZbTCORjHRawYPSHhe/6z+BKlUF3irXr0
// SIG // 5WV46bjYYY7kftgzLf3Vrn416YlvdW6N2h+hGozgC15q
// SIG // MYJbQqdSu4a0uoJrL4/eHC0X+dEEOFPEMIIHejCCBWKg
// SIG // AwIBAgIKYQ6Q0gAAAAAAAzANBgkqhkiG9w0BAQsFADCB
// SIG // iDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEyMDAGA1UEAxMpTWlj
// SIG // cm9zb2Z0IFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5
// SIG // IDIwMTEwHhcNMTEwNzA4MjA1OTA5WhcNMjYwNzA4MjEw
// SIG // OTA5WjB+MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSgwJgYDVQQD
// SIG // Ex9NaWNyb3NvZnQgQ29kZSBTaWduaW5nIFBDQSAyMDEx
// SIG // MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA
// SIG // q/D6chAcLq3YbqqCEE00uvK2WCGfQhsqa+laUKq4Bjga
// SIG // BEm6f8MMHt03a8YS2AvwOMKZBrDIOdUBFDFC04kNeWSH
// SIG // fpRgJGyvnkmc6Whe0t+bU7IKLMOv2akrrnoJr9eWWcpg
// SIG // GgXpZnboMlImEi/nqwhQz7NEt13YxC4Ddato88tt8zpc
// SIG // oRb0RrrgOGSsbmQ1eKagYw8t00CT+OPeBw3VXHmlSSnn
// SIG // Db6gE3e+lD3v++MrWhAfTVYoonpy4BI6t0le2O3tQ5GD
// SIG // 2Xuye4Yb2T6xjF3oiU+EGvKhL1nkkDstrjNYxbc+/jLT
// SIG // swM9sbKvkjh+0p2ALPVOVpEhNSXDOW5kf1O6nA+tGSOE
// SIG // y/S6A4aN91/w0FK/jJSHvMAhdCVfGCi2zCcoOCWYOUo2
// SIG // z3yxkq4cI6epZuxhH2rhKEmdX4jiJV3TIUs+UsS1Vz8k
// SIG // A/DRelsv1SPjcF0PUUZ3s/gA4bysAoJf28AVs70b1FVL
// SIG // 5zmhD+kjSbwYuER8ReTBw3J64HLnJN+/RpnF78IcV9uD
// SIG // jexNSTCnq47f7Fufr/zdsGbiwZeBe+3W7UvnSSmnEyim
// SIG // p31ngOaKYnhfsi+E11ecXL93KCjx7W3DKI8sj0A3T8Hh
// SIG // hUSJxAlMxdSlQy90lfdu+HggWCwTXWCVmj5PM4TasIgX
// SIG // 3p5O9JawvEagbJjS4NaIjAsCAwEAAaOCAe0wggHpMBAG
// SIG // CSsGAQQBgjcVAQQDAgEAMB0GA1UdDgQWBBRIbmTlUAXT
// SIG // gqoXNzcitW2oynUClTAZBgkrBgEEAYI3FAIEDB4KAFMA
// SIG // dQBiAEMAQTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUw
// SIG // AwEB/zAfBgNVHSMEGDAWgBRyLToCMZBDuRQFTuHqp8cx
// SIG // 0SOJNDBaBgNVHR8EUzBRME+gTaBLhklodHRwOi8vY3Js
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9N
// SIG // aWNSb29DZXJBdXQyMDExXzIwMTFfMDNfMjIuY3JsMF4G
// SIG // CCsGAQUFBwEBBFIwUDBOBggrBgEFBQcwAoZCaHR0cDov
// SIG // L3d3dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNS
// SIG // b29DZXJBdXQyMDExXzIwMTFfMDNfMjIuY3J0MIGfBgNV
// SIG // HSAEgZcwgZQwgZEGCSsGAQQBgjcuAzCBgzA/BggrBgEF
// SIG // BQcCARYzaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3Br
// SIG // aW9wcy9kb2NzL3ByaW1hcnljcHMuaHRtMEAGCCsGAQUF
// SIG // BwICMDQeMiAdAEwAZQBnAGEAbABfAHAAbwBsAGkAYwB5
// SIG // AF8AcwB0AGEAdABlAG0AZQBuAHQALiAdMA0GCSqGSIb3
// SIG // DQEBCwUAA4ICAQBn8oalmOBUeRou09h0ZyKbC5YR4WOS
// SIG // mUKWfdJ5DJDBZV8uLD74w3LRbYP+vj/oCso7v0epo/Np
// SIG // 22O/IjWll11lhJB9i0ZQVdgMknzSGksc8zxCi1LQsP1r
// SIG // 4z4HLimb5j0bpdS1HXeUOeLpZMlEPXh6I/MTfaaQdION
// SIG // 9MsmAkYqwooQu6SpBQyb7Wj6aC6VoCo/KmtYSWMfCWlu
// SIG // WpiW5IP0wI/zRive/DvQvTXvbiWu5a8n7dDd8w6vmSiX
// SIG // mE0OPQvyCInWH8MyGOLwxS3OW560STkKxgrCxq2u5bLZ
// SIG // 2xWIUUVYODJxJxp/sfQn+N4sOiBpmLJZiWhub6e3dMNA
// SIG // BQamASooPoI/E01mC8CzTfXhj38cbxV9Rad25UAqZaPD
// SIG // XVJihsMdYzaXht/a8/jyFqGaJ+HNpZfQ7l1jQeNbB5yH
// SIG // PgZ3BtEGsXUfFL5hYbXw3MYbBL7fQccOKO7eZS/sl/ah
// SIG // XJbYANahRr1Z85elCUtIEJmAH9AAKcWxm6U/RXceNcbS
// SIG // oqKfenoi+kiVH6v7RyOA9Z74v2u3S5fi63V4GuzqN5l5
// SIG // GEv/1rMjaHXmr/r8i+sLgOppO6/8MO0ETI7f33VtY5E9
// SIG // 0Z1WTk+/gFcioXgRMiF670EKsT/7qMykXcGhiJtXcVZO
// SIG // SEXAQsmbdlsKgEhr/Xmfwb1tbWrJUnMTDXpQzTGCFWQw
// SIG // ghVgAgEBMIGVMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTECEzMAAAGHchdyFVlAxwkAAAAAAYcwDQYJYIZI
// SIG // AWUDBAIBBQCgga4wGQYJKoZIhvcNAQkDMQwGCisGAQQB
// SIG // gjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcC
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIKuYtDmhzTP3xHsoZjaN
// SIG // yGU1CHKkMW3PkM5CRGgdJPvTMEIGCisGAQQBgjcCAQwx
// SIG // NDAyoBSAEgBNAGkAYwByAG8AcwBvAGYAdKEagBhodHRw
// SIG // Oi8vd3d3Lm1pY3Jvc29mdC5jb20wDQYJKoZIhvcNAQEB
// SIG // BQAEggEAcoWdilGKqXZcLOxuEHR9gX0cOMvlxRngxLK0
// SIG // O+9TRYoRvDdy/DOuzZeTbsNbqxv8ecNulT6grGeT7Ogg
// SIG // nPddL7bpC189CX3TlAyoA+R0Fy/IQf8TrNRyLJQTZkjR
// SIG // /9MfmW0PtC89ULtyWUiCDvYVbg/pl/0Tlqp1GfOdzvXM
// SIG // +lUzfBmmuuUR1PV++Am4Qr2QiX7QQMIGzbU+q0WHYRTB
// SIG // lAPuqYDGib4EekQWzWrH80TPu475FAzv54iueRkAkGzO
// SIG // ha4duh5vp0UKwg2FcQ+2tathjnYYOgOzMWqjzT8HLWzW
// SIG // y0RnTadIefLyt43XYACp6xkAyBnS0qP26+5BP6TIs6GC
// SIG // Eu4wghLqBgorBgEEAYI3AwMBMYIS2jCCEtYGCSqGSIb3
// SIG // DQEHAqCCEscwghLDAgEDMQ8wDQYJYIZIAWUDBAIBBQAw
// SIG // ggFVBgsqhkiG9w0BCRABBKCCAUQEggFAMIIBPAIBAQYK
// SIG // KwYBBAGEWQoDATAxMA0GCWCGSAFlAwQCAQUABCAHDY+J
// SIG // S6htKEcZhQU/O5Rxk5Zl/aidgivQDnl5bFHHrQIGXvID
// SIG // kovwGBMyMDIwMDcwMTA1NTUzMC4zNjdaMASAAgH0oIHU
// SIG // pIHRMIHOMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQL
// SIG // EyBNaWNyb3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmlj
// SIG // bzEmMCQGA1UECxMdVGhhbGVzIFRTUyBFU046RjdBNi1F
// SIG // MjUxLTE1MEExJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFNlcnZpY2Wggg5BMIIE9TCCA92gAwIBAgIT
// SIG // MwAAASWL3otsciYx3QAAAAABJTANBgkqhkiG9w0BAQsF
// SIG // ADB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGlu
// SIG // Z3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMV
// SIG // TWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1N
// SIG // aWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAeFw0x
// SIG // OTEyMTkwMTE0NThaFw0yMTAzMTcwMTE0NThaMIHOMQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNyb3Nv
// SIG // ZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEmMCQGA1UE
// SIG // CxMdVGhhbGVzIFRTUyBFU046RjdBNi1FMjUxLTE1MEEx
// SIG // JTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNl
// SIG // cnZpY2UwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK
// SIG // AoIBAQDQex9jdmBb7OHJwSYmMUorZNwAcv8Vy36TlJuz
// SIG // cVx7G+lFqt2zjWOMlSOMkm1XoAuJ8VZ5ShBedADXDGDK
// SIG // xHNZhLu3EW8x5ot/IOk6izLTlAFtvIXOgzXs/HaOM72X
// SIG // HKykMZHAdL/fpZtASM5PalmsXX4Ol8lXkm9jR55K56C7
// SIG // q9+hDU+2tjGHaE1ZWlablNUXBhaZgtCJCd60UyZvgI7/
// SIG // uNzcafj0/Vw2bait9nDAVd24yt/XCZnHY3yX7ZsHjIuH
// SIG // psl+PpDXai1Dwe9p0ryCZsl9SOMHextIHe9qlTbtWYJ8
// SIG // WtWLoH9dEMQxVLnmPPDOVmBj7LZhSji38N9Vpz/FAgMB
// SIG // AAGjggEbMIIBFzAdBgNVHQ4EFgQU86rK5Qcm+QE5NBXG
// SIG // CPIiCBdDJPgwHwYDVR0jBBgwFoAU1WM6XIoxkPNDe3xG
// SIG // G8UzaFqFbVUwVgYDVR0fBE8wTTBLoEmgR4ZFaHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVj
// SIG // dHMvTWljVGltU3RhUENBXzIwMTAtMDctMDEuY3JsMFoG
// SIG // CCsGAQUFBwEBBE4wTDBKBggrBgEFBQcwAoY+aHR0cDov
// SIG // L3d3dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNU
// SIG // aW1TdGFQQ0FfMjAxMC0wNy0wMS5jcnQwDAYDVR0TAQH/
// SIG // BAIwADATBgNVHSUEDDAKBggrBgEFBQcDCDANBgkqhkiG
// SIG // 9w0BAQsFAAOCAQEAkxxZPGEgIgAhsqZNTZk58V1vQiJ5
// SIG // ja2xHl5TqGA6Hwj5SioLg3FSLiTmGV+BtFlpYUtkneB4
// SIG // jrZsuNpMtfbTMdG7p/xAyIVtwvXnTXqKlCD1T9Lcr94p
// SIG // VedzHGJzL1TYNQyZJBouCfzkgkzccOuFOfeWPfnMTiI5
// SIG // UBW5OdmoyHPQWDSGHoboW1dTKqXeJtuVDTYbHTKs4zjf
// SIG // CBMFjmylRu52Zpiz+9MBeRj4iAeou0F/3xvIzepoIKgU
// SIG // WCZ9mmViWEkVwCtTGbV8eK73KeEE0tfMU/YY2UmoGPc8
// SIG // YwburDEfelegLW+YHkfrcGAGlftCmqtOdOLeghLoG0Ub
// SIG // x/B7sTCCBnEwggRZoAMCAQICCmEJgSoAAAAAAAIwDQYJ
// SIG // KoZIhvcNAQELBQAwgYgxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // MjAwBgNVBAMTKU1pY3Jvc29mdCBSb290IENlcnRpZmlj
// SIG // YXRlIEF1dGhvcml0eSAyMDEwMB4XDTEwMDcwMTIxMzY1
// SIG // NVoXDTI1MDcwMTIxNDY1NVowfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTAwggEiMA0GCSqGSIb3DQEBAQUAA4IB
// SIG // DwAwggEKAoIBAQCpHQ28dxGKOiDs/BOX9fp/aZRrdFQQ
// SIG // 1aUKAIKF++18aEssX8XD5WHCdrc+Zitb8BVTJwQxH0Eb
// SIG // GpUdzgkTjnxhMFmxMEQP8WCIhFRDDNdNuDgIs0Ldk6zW
// SIG // czBXJoKjRQ3Q6vVHgc2/JGAyWGBG8lhHhjKEHnRhZ5Ff
// SIG // gVSxz5NMksHEpl3RYRNuKMYa+YaAu99h/EbBJx0kZxJy
// SIG // GiGKr0tkiVBisV39dx898Fd1rL2KQk1AUdEPnAY+Z3/1
// SIG // ZsADlkR+79BL/W7lmsqxqPJ6Kgox8NpOBpG2iAg16Hgc
// SIG // sOmZzTznL0S6p/TcZL2kAcEgCZN4zfy8wMlEXV4WnAEF
// SIG // TyJNAgMBAAGjggHmMIIB4jAQBgkrBgEEAYI3FQEEAwIB
// SIG // ADAdBgNVHQ4EFgQU1WM6XIoxkPNDe3xGG8UzaFqFbVUw
// SIG // GQYJKwYBBAGCNxQCBAweCgBTAHUAYgBDAEEwCwYDVR0P
// SIG // BAQDAgGGMA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgw
// SIG // FoAU1fZWy4/oolxiaNE9lJBb186aGMQwVgYDVR0fBE8w
// SIG // TTBLoEmgR4ZFaHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraS9jcmwvcHJvZHVjdHMvTWljUm9vQ2VyQXV0XzIw
// SIG // MTAtMDYtMjMuY3JsMFoGCCsGAQUFBwEBBE4wTDBKBggr
// SIG // BgEFBQcwAoY+aHR0cDovL3d3dy5taWNyb3NvZnQuY29t
// SIG // L3BraS9jZXJ0cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0y
// SIG // My5jcnQwgaAGA1UdIAEB/wSBlTCBkjCBjwYJKwYBBAGC
// SIG // Ny4DMIGBMD0GCCsGAQUFBwIBFjFodHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vUEtJL2RvY3MvQ1BTL2RlZmF1bHQu
// SIG // aHRtMEAGCCsGAQUFBwICMDQeMiAdAEwAZQBnAGEAbABf
// SIG // AFAAbwBsAGkAYwB5AF8AUwB0AGEAdABlAG0AZQBuAHQA
// SIG // LiAdMA0GCSqGSIb3DQEBCwUAA4ICAQAH5ohRDeLG4Jg/
// SIG // gXEDPZ2joSFvs+umzPUxvs8F4qn++ldtGTCzwsVmyWrf
// SIG // 9efweL3HqJ4l4/m87WtUVwgrUYJEEvu5U4zM9GASinbM
// SIG // QEBBm9xcF/9c+V4XNZgkVkt070IQyK+/f8Z/8jd9Wj8c
// SIG // 8pl5SpFSAK84Dxf1L3mBZdmptWvkx872ynoAb0swRCQi
// SIG // PM/tA6WWj1kpvLb9BOFwnzJKJ/1Vry/+tuWOM7tiX5rb
// SIG // V0Dp8c6ZZpCM/2pif93FSguRJuI57BlKcWOdeyFtw5yj
// SIG // ojz6f32WapB4pm3S4Zz5Hfw42JT0xqUKloakvZ4argRC
// SIG // g7i1gJsiOCC1JeVk7Pf0v35jWSUPei45V3aicaoGig+J
// SIG // FrphpxHLmtgOR5qAxdDNp9DvfYPw4TtxCd9ddJgiCGHa
// SIG // sFAeb73x4QDf5zEHpJM692VHeOj4qEir995yfmFrb3ep
// SIG // gcunCaw5u+zGy9iCtHLNHfS4hQEegPsbiSpUObJb2sgN
// SIG // VZl6h3M7COaYLeqN4DMuEin1wC9UJyH3yKxO2ii4sanb
// SIG // lrKnQqLJzxlBTeCG+SqaoxFmMNO7dDJL32N79ZmKLxvH
// SIG // Ia9Zta7cRDyXUHHXodLFVeNp3lfB0d4wwP3M5k37Db9d
// SIG // T+mdHhk4L7zPWAUu7w2gUDXa7wknHNWzfjUeCLraNtvT
// SIG // X4/edIhJEqGCAs8wggI4AgEBMIH8oYHUpIHRMIHOMQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNyb3Nv
// SIG // ZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEmMCQGA1UE
// SIG // CxMdVGhhbGVzIFRTUyBFU046RjdBNi1FMjUxLTE1MEEx
// SIG // JTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNl
// SIG // cnZpY2WiIwoBATAHBgUrDgMCGgMVAEXTL+FQbc2G+3MX
// SIG // XvIRKVr2oXCnoIGDMIGApH4wfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTAwDQYJKoZIhvcNAQEFBQACBQDipmTr
// SIG // MCIYDzIwMjAwNzAxMDUyNzA3WhgPMjAyMDA3MDIwNTI3
// SIG // MDdaMHQwOgYKKwYBBAGEWQoEATEsMCowCgIFAOKmZOsC
// SIG // AQAwBwIBAAICGvkwBwIBAAICEhowCgIFAOKntmsCAQAw
// SIG // NgYKKwYBBAGEWQoEAjEoMCYwDAYKKwYBBAGEWQoDAqAK
// SIG // MAgCAQACAwehIKEKMAgCAQACAwGGoDANBgkqhkiG9w0B
// SIG // AQUFAAOBgQB3ylZIiLa19VematMHhw0PLmj2dU8H8J+Q
// SIG // LZBn59/vEynfM4mBn4R6fp+n1QGsv06gFr6Odz3ut70n
// SIG // ELleZIRiB98b5mbc3exxbJmFth8og5+k0kDxUpWLx0fY
// SIG // ZCh1Bqk+82uXKmcIUW1h6128StDAJLcJcGTlIa9pdZpO
// SIG // MTLBVzGCAw0wggMJAgEBMIGTMHwxCzAJBgNVBAYTAlVT
// SIG // MRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdS
// SIG // ZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIFBDQSAyMDEwAhMzAAABJYvei2xyJjHdAAAAAAEl
// SIG // MA0GCWCGSAFlAwQCAQUAoIIBSjAaBgkqhkiG9w0BCQMx
// SIG // DQYLKoZIhvcNAQkQAQQwLwYJKoZIhvcNAQkEMSIEIER4
// SIG // a5rfN3v/Kj4eVcrwWJq1M2pBKHu74hPaLogAGpUgMIH6
// SIG // BgsqhkiG9w0BCRACLzGB6jCB5zCB5DCBvQQgXd/Gsi5v
// SIG // MF/6iX2CDh+VfmL5RvqaFkFwluiyje9B9w4wgZgwgYCk
// SIG // fjB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGlu
// SIG // Z3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMV
// SIG // TWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1N
// SIG // aWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMAITMwAA
// SIG // ASWL3otsciYx3QAAAAABJTAiBCA0Z/GnjH4cD4aX7Jih
// SIG // c9meP/tA2W7hnUcAuIeCLWy6ZjANBgkqhkiG9w0BAQsF
// SIG // AASCAQC3dYWTd38Csws7L0WHywg4H1sl1n5Xt/QiqVnz
// SIG // iVJNxMhp7Ya5B++L8ZWoJ5fd5eqDIpyEQoZCBBeMC3So
// SIG // AZg1WFbLNwKwYBRsu0YocYBniJplYLfQa9UP1uQrWN83
// SIG // XuZJwUpuyQk1aRi0/NW+OeKAGRxt6OrMf+OQLDsC3A48
// SIG // XJnL3QwyjVMPh6MWC94EUpq+Bnu7eymyIGjoVahJ2mYg
// SIG // 08gip+RhPXLndPPZP/k9D/q2LN8c1qNbeKbL3TrwD4FT
// SIG // 9Vst4wJJBNm1NWrDT596fd8xyHtTUuzHNHk71FPcBmcv
// SIG // 4aDe5f6tqWxvXLOwINKQYatMZvpZnDcn89KLXsZj
// SIG // End signature block
