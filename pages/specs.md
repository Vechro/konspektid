Nimekirja koostamiseks kasutasin [HWiNFO](https://www.hwinfo.com/)'t, [CPU-Z](https://www.cpuid.com/softwares/cpu-z.html)'d ja natuke Powershelli. HWiNFO töötas väga hästi, kuid raporteeris valet graafikakaarti, AMD FirePro W5130M asemel mainis ta hoopis AMD Radeon R9 M360-t mis on üldse lauaarvutitele mõeldud. CPU-Z'l seda probleemi ei olnud. Valitud tulemused kandsin Markdowni formaadis faili ja kasutasin ühte oma vanat GitHub-i projekti, et teisendada see HTML-iks. Jätsin alles vaid tulemused mis leidsin, et on olulised, mõnes kohas on ka täpsemad põhjendused. 

# Dell Precision 3510

| | |
--|--
Operating System | Microsoft Windows 10 Professional (x64) Build 18362.356 (1903/May 2019 Update)
Current User Name | Odusseia

## Processor

| | |
--|--
Processor Name | **Intel Core i7-6820HK**
Processor Frequency | 2.70 GHz
CPU Code Name | Skylake-H
CPU Technology | 14 nm
CPU Thermal Design Power (TDP) | 45 W
Number of CPU Cores | 4
Number of Logical Cores | 8

Protsessori kohta oli väga palju infot, jätsin allest vaid põhilise. Protsessori nime, sagedus sest see võib mõnikord erineda tootjate vahel. TDP on ka muutlik mõnikord. Tuumade ja loogiliste tuumade arv on ka oluline, sest sellest on näha, et Hyper-threading on sisse lülitatud.

## Motherboard

| | |
--|--
Motherboard Model | DELL 00D283
Motherboard Chipset | Intel CM236 (Skylake PCH-H)
Motherboard Slots | 4xPCI Express x1, 1xPCI Express x16
PCI Express Version Supported | v3.0
USB Version Supported | v3.0

## BIOS

| | |
--|--
BIOS Vendor | Dell Inc.
BIOS Version | 1.11.4
BIOS Release Date | 12/22/2016

Turvalisuse ja jõudluse mõttes on suhteliselt tähtis teada, mis BIOS-i versioon on.

## Memory

| | |
--|--
Total Memory Size | **16 GB**
Memory Type | DDR4
Maximum Supported Memory Clock | 1300.0 MHz
Current Memory Clock | 1064.1 MHz
Current Timing (tCAS-tRCD-tRP-tRAS) | 15-15-15-36
Memory Channels Supported | 2
Memory Channels Active | 2

Mälu kohta ma täiesti kindel ei olnud, ma ei tea kui muutlik Current Memory Clock on ehk kas seda on mõtet lisada või mitte. Kasulik on teada mitu RAM-i pulka on ja mis kiirusega need on.

## Display Adapters

### Intel HD Graphics 530

| | |
--|--
Memory size | 128 MB

Selle graafikakaardi kohta oli vähe infot.

### AMD FirePro W5130M

| | |
--|--
GPU Clock | 925.0 MHz
Memory type | GDDR5
Memory size | 2048 MB
Bandwidth | 64.0 GB/s

## Storage

| | |
--|--
Drive Model | SK Hynix SC311 SATA 512GB
Drive Capacity | 488,386 MBytes (512 GB)
Features | S.M.A.R.T., APM, NCQ, TRIM, SSD
Max. Transfer Mode | SATA III 6.0Gb/s
Nominal Form Factor | M.2

Laptopide puhul on suhteliselt tähtis teada, kas on SSD või HDD, HDD kukkumist väga ei kannata. Mahutavus on ka hea teada. S.M.A.R.T. tehnoloogia on ka vajalik kui on vaja hinnata draivi seisu ja eluiga.

## Connectivity

### Intel Ethernet Connection I219-LM

| | |
--|--
Maximum Link Speed | 1000 Mbps

### Intel Dual Band Wireless-AC 8260 AC 2x2 HMC WiFi Adapter

| | |
--|--
Maximum Link Speed | 866 Mbps

### Intel Wireless Bluetooth

## Ports

| Name | Type |
-------|-------
DOCK | Dock
CRT | Video
HDMI | Video
Cardreader | Cardreader
Network | Network Port
USB1 | USB
USB2 | USB
USB3 | USB
Audio Jack | Audio Port
SIM Card | SIM Card
Smart Card | Smart Card

## Battery

| | |
--|--
Device Name | DELL G9G1H73
Manufacturer Name | LGC-LGC3.67
Serial Number | 35185
Unique ID | 35185LGC-LGC3.67DELL G9G1H73
Chemistry | Lithium Ion
Designed Capacity | 83995 mWh
Full Charged Capacity | 69266 mWh
Wear Level | 17.5 %

Aku teeb laptopist laptopi. On hea teada kui palju see mahutab ja mis mudel see on, et saaks vajadusel välja vahetada.

## Programs

Programmide nimekirja saamiseks kasutasin järgnevat Powershelli käsklust.
```
Get-ItemProperty HKLM:\Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall\* | Select-Object DisplayName, DisplayVersion | Format-Table –AutoSize > C:\InstalledProgramsPS.txt
```


Name                                                         | Version      
-----------                                                         | --------------      
Visual Studio Build Tools 2019                                      | 16.2.29215.179                       
CrystalDiskInfo 8.2.4                                               | 8.2.4               
Deluge 1.3.15                                                       | 1.3.15    
Google Chrome                                                       | 76.0.3809.132       
Adobe Illustrator 2019                                              | 23.0.6                                  
Adobe Photoshop CC 2019                                             | 20.0.6                                
WinSCP 5.15.3                                                       | 5.15.3              
DcuMSMWrap                                                          | 5.0.03              
Universal CRT Redistributable                                       | 10.0.26624          
Windows Software Development Kit - Windows 10.0.18362.1             | 10.1.18362.1        
Universal CRT Extension SDK                                         | 10.1.18362.1        
Windows Mobile Extension SDK Contracts                              | 10.1.18362.1        
Windows App Certification Kit x64                                   | 10.1.18362.1        
Windows SDK Desktop Libs arm64                                      | 10.1.18362.1                         
Microsoft Visual C++ 2019 X86 Minimum Runtime - 14.22.27821         | 14.22.27821         
Windows SDK ARM Desktop Tools                                       | 10.1.18362.1        
Windows SDK Modern Versioned Developer Tools                        | 10.1.18362.1        
Windows SDK for Windows Store Apps Libs                             | 10.1.18362.1        
Realtek Audio COM Components                                        | 1.0.2               
Microsoft Visual Studio Setup Configuration                         | 2.1.1046.44959      
Windows SDK Desktop Libs x86                                        | 10.1.18362.1        
WinRT Intellisense UAP - Other Languages                            | 10.1.18362.1        
Open-EID Metapackage                                                | 19.7.0.1837         
eID software                                                        | 19.7.0.1837         
Windows SDK Desktop Tools arm64                                     | 10.1.18362.1        
Windows Mobile Extension SDK                                        | 10.1.18362.1        
Microsoft Visual C++ 2012 Redistributable (x86) - 11.0.61030        | 11.0.61030.0        
Windows SDK Redistributables                                        | 10.1.18362.1        
WinRT Intellisense IoT - en-us                                      | 10.1.18362.1        
Windows SDK for Windows Store Apps                                  | 10.1.18362.1        
Windows Desktop Extension SDK Contracts                             | 10.1.18362.1        
Windows SDK                                                         | 10.1.18362.1        
Microsoft Visual C++ 2019 X86 Additional Runtime - 14.22.27821      | 14.22.27821         
Chrome Remote Desktop Host                                          | 77.0.3865.32        
Windows IoT Extension SDK Contracts                                 | 10.1.18362.1        
Windows SDK Desktop Headers arm                                     | 10.1.18362.1        
Windows SDK Desktop Headers arm64                                   | 10.1.18362.1        
Windows SDK Signing Tools                                           | 10.1.18362.1        
Windows SDK DirectX x86 Remote                                      | 10.1.18362.1        
Windows SDK Desktop Tools x86                                       | 10.1.18362.1        
Windows SDK Desktop Libs x64                                        | 10.1.18362.1        
Realtek Card Reader                                                 | 10.0.15063.21300    
Microsoft Visual C++ 2015-2019 Redistributable (x86) - 14.22.27821  | 14.22.27821.0       
Windows App Certification Kit SupportedApiList x86                  | 10.1.18362.1        
Windows Team Extension SDK Contracts                                | 10.1.18362.1        
Windows SDK EULA                                                    | 10.1.18362.1        
Windows SDK for Windows Store Apps Metadata                         | 10.1.18362.1        
Google Update Helper                                                | 1.3.34.11           
Microsoft Visual C++ 2013 Redistributable (x86) - 12.0.40660        | 12.0.40660.0        
Microsoft Visual C++ 2015-2019 Redistributable (x64) - 14.22.27821  | 14.22.27821.0       
Kits Configuration Installer                                        | 10.1.18362.1        
Windows SDK for Windows Store Apps Headers                          | 10.1.18362.1        
DigiDoc4 Client                                                     | 4.2.2.51            
WinRT Intellisense PPI - en-us                                      | 10.1.18362.1        
SDK ARM Redistributables                                            | 10.1.18362.1        
Windows SDK Desktop Headers x64                                     | 10.1.18362.1        
WinRT Intellisense IoT - Other Languages                            | 10.1.18362.1        
WinRT Intellisense UAP - en-us                                      | 10.1.18362.1        
Windows Team Extension SDK                                          | 10.1.18362.1        
Universal General MIDI DLS Extension SDK                            | 10.1.18362.1        
SDK ARM Additions                                                   | 10.1.18362.1        
Universal CRT Headers Libraries and Sources                         | 10.1.18362.1        
Windows SDK Desktop Tools x64                                       | 10.1.18362.1        
Microsoft Visual C++ 2013 x86 Additional Runtime - 12.0.40660       | 12.0.40660          
vs_FileTracker_Singleton                                            | 16.2.29006          
WinRT Intellisense Desktop - Other Languages                        | 10.1.18362.1        
Universal CRT Redistributable                                       | 10.1.18362.1        
Windows SDK Desktop Headers x86                                     | 10.1.18362.1        
Intel(R) Extreme Tuning Utility                                     | 6.5.1.355           
WinAppDeploy                                                        | 10.1.18362.1        
EstEID Shell Extension                                              | 3.13.6.3            
Windows SDK for Windows Store Apps DirectX x86 Remote               | 10.1.18362.1        
WinRT Intellisense Mobile - en-us                                   | 10.1.18362.1        
Windows SDK Desktop Libs arm                                        | 10.1.18362.1        
Microsoft Visual C++ 2008 Redistributable - x86 9.0.30729.17        | 9.0.30729           
WinRT Intellisense PPI - Other Languages                            | 10.1.18362.1        
Windows IoT Extension SDK                                           | 10.1.18362.1        
Universal CRT Tools x86                                             | 10.1.18362.1        
Intel(R) Extreme Tuning Utility                                     | 6.5.1.355           
Windows SDK for Windows Store Apps Tools                            | 10.1.18362.1        
Windows SDK Facade Windows WinMD Versioned                          | 10.1.18362.1        
Microsoft Visual C++ 2012 x86 Additional Runtime - 11.0.61030       | 11.0.61030          
Windows Desktop Extension SDK                                       | 10.1.18362.1        
Microsoft Visual C++ 2019 X86 Debug Runtime - 14.22.27821           | 14.22.27821         
Microsoft Visual C++ 2012 x86 Minimum Runtime - 11.0.61030          | 11.0.61030          
vcpp_crt.redist.clickonce                                           | 14.22.27821         
Windows SDK for Windows Store Apps Contracts                        | 10.1.18362.1        
AMD Settings                                                        | 2019.0523.2212.39983
Microsoft Visual C++ 2012 Redistributable (x64) - 11.0.61030        | 11.0.61030.0        
Windows SDK for Windows Store Managed Apps Libs                     | 10.1.18362.1        
Dell Precision Optimizer Application                                | 6.0.10              
Python Launcher                                                     | 3.7.6762.0          
MSI Development Tools                                               | 10.1.18362.1        
Windows SDK Modern Non-Versioned Developer Tools                    | 10.1.18362.1        
Microsoft Visual C++ 2013 x86 Minimum Runtime - 12.0.40660          | 12.0.40660          
WinRT Intellisense Desktop - en-us                                  | 10.1.18362.1        
Windows SDK AddOn                                                   | 10.1.0.0            
Microsoft Visual C++ 2013 Redistributable (x64) - 12.0.40660        | 12.0.40660.0        
Microsoft Visual C++ 2010  x86 Redistributable - 10.0.40219         | 10.0.40219               
Realtek High Definition Audio Driver                                | 6.0.1.6095          
Open-EID Updater                                                    | 3.12.6.1021         