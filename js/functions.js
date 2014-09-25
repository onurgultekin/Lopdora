var countries = [ 
{name: 'Afghanistan', code: 'AF'}, 
{name: 'Aland Islands', code: 'AX'}, 
{name: 'Albania', code: 'AL'}, 
{name: 'Algeria', code: 'DZ'}, 
{name: 'American Samoa', code: 'AS'}, 
{name: 'AndorrA', code: 'AD'}, 
{name: 'Angola', code: 'AO'}, 
{name: 'Anguilla', code: 'AI'}, 
{name: 'Antarctica', code: 'AQ'}, 
{name: 'Antigua and Barbuda', code: 'AG'}, 
{name: 'Argentina', code: 'AR'}, 
{name: 'Armenia', code: 'AM'}, 
{name: 'Aruba', code: 'AW'}, 
{name: 'Australia', code: 'AU'}, 
{name: 'Austria', code: 'AT'}, 
{name: 'Azerbaijan', code: 'AZ'}, 
{name: 'Bahamas', code: 'BS'}, 
{name: 'Bahrain', code: 'BH'}, 
{name: 'Bangladesh', code: 'BD'}, 
{name: 'Barbados', code: 'BB'}, 
{name: 'Belarus', code: 'BY'}, 
{name: 'Belgium', code: 'BE'}, 
{name: 'Belize', code: 'BZ'}, 
{name: 'Benin', code: 'BJ'}, 
{name: 'Bermuda', code: 'BM'}, 
{name: 'Bhutan', code: 'BT'}, 
{name: 'Bolivia', code: 'BO'}, 
{name: 'Bosnia and Herzegovina', code: 'BA'}, 
{name: 'Botswana', code: 'BW'}, 
{name: 'Bouvet Island', code: 'BV'}, 
{name: 'Brazil', code: 'BR'}, 
{name: 'British Indian Ocean Territory', code: 'IO'}, 
{name: 'Brunei Darussalam', code: 'BN'}, 
{name: 'Bulgaria', code: 'BG'}, 
{name: 'Burkina Faso', code: 'BF'}, 
{name: 'Burundi', code: 'BI'}, 
{name: 'Cambodia', code: 'KH'}, 
{name: 'Cameroon', code: 'CM'}, 
{name: 'Canada', code: 'CA'}, 
{name: 'Cape Verde', code: 'CV'}, 
{name: 'Cayman Islands', code: 'KY'}, 
{name: 'Central African Republic', code: 'CF'}, 
{name: 'Chad', code: 'TD'}, 
{name: 'Chile', code: 'CL'}, 
{name: 'China', code: 'CN'}, 
{name: 'Christmas Island', code: 'CX'}, 
{name: 'Cocos (Keeling) Islands', code: 'CC'}, 
{name: 'Colombia', code: 'CO'}, 
{name: 'Comoros', code: 'KM'}, 
{name: 'Congo', code: 'CG'}, 
{name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
{name: 'Cook Islands', code: 'CK'}, 
{name: 'Costa Rica', code: 'CR'}, 
{name: 'Cote D\'Ivoire', code: 'CI'}, 
{name: 'Croatia', code: 'HR'}, 
{name: 'Cuba', code: 'CU'}, 
{name: 'Cyprus', code: 'CY'}, 
{name: 'Czech Republic', code: 'CZ'}, 
{name: 'Denmark', code: 'DK'}, 
{name: 'Djibouti', code: 'DJ'}, 
{name: 'Dominica', code: 'DM'}, 
{name: 'Dominican Republic', code: 'DO'}, 
{name: 'Ecuador', code: 'EC'}, 
{name: 'Egypt', code: 'EG'}, 
{name: 'El Salvador', code: 'SV'}, 
{name: 'Equatorial Guinea', code: 'GQ'}, 
{name: 'Eritrea', code: 'ER'}, 
{name: 'Estonia', code: 'EE'}, 
{name: 'Ethiopia', code: 'ET'}, 
{name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
{name: 'Faroe Islands', code: 'FO'}, 
{name: 'Fiji', code: 'FJ'}, 
{name: 'Finland', code: 'FI'}, 
{name: 'France', code: 'FR'}, 
{name: 'French Guiana', code: 'GF'}, 
{name: 'French Polynesia', code: 'PF'}, 
{name: 'French Southern Territories', code: 'TF'}, 
{name: 'Gabon', code: 'GA'}, 
{name: 'Gambia', code: 'GM'}, 
{name: 'Georgia', code: 'GE'}, 
{name: 'Germany', code: 'DE'}, 
{name: 'Ghana', code: 'GH'}, 
{name: 'Gibraltar', code: 'GI'}, 
{name: 'Greece', code: 'GR'}, 
{name: 'Greenland', code: 'GL'}, 
{name: 'Grenada', code: 'GD'}, 
{name: 'Guadeloupe', code: 'GP'}, 
{name: 'Guam', code: 'GU'}, 
{name: 'Guatemala', code: 'GT'}, 
{name: 'Guernsey', code: 'GG'}, 
{name: 'Guinea', code: 'GN'}, 
{name: 'Guinea-Bissau', code: 'GW'}, 
{name: 'Guyana', code: 'GY'}, 
{name: 'Haiti', code: 'HT'}, 
{name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
{name: 'Holy See (Vatican City State)', code: 'VA'}, 
{name: 'Honduras', code: 'HN'}, 
{name: 'Hong Kong', code: 'HK'}, 
{name: 'Hungary', code: 'HU'}, 
{name: 'Iceland', code: 'IS'}, 
{name: 'India', code: 'IN'}, 
{name: 'Indonesia', code: 'ID'}, 
{name: 'Iran, Islamic Republic Of', code: 'IR'}, 
{name: 'Iraq', code: 'IQ'}, 
{name: 'Ireland', code: 'IE'}, 
{name: 'Isle of Man', code: 'IM'}, 
{name: 'Israel', code: 'IL'}, 
{name: 'Italy', code: 'IT'}, 
{name: 'Jamaica', code: 'JM'}, 
{name: 'Japan', code: 'JP'}, 
{name: 'Jersey', code: 'JE'}, 
{name: 'Jordan', code: 'JO'}, 
{name: 'Kazakhstan', code: 'KZ'}, 
{name: 'Kenya', code: 'KE'}, 
{name: 'Kiribati', code: 'KI'}, 
{name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
{name: 'Korea, Republic of', code: 'KR'}, 
{name: 'Kuwait', code: 'KW'}, 
{name: 'Kyrgyzstan', code: 'KG'}, 
{name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
{name: 'Latvia', code: 'LV'}, 
{name: 'Lebanon', code: 'LB'}, 
{name: 'Lesotho', code: 'LS'}, 
{name: 'Liberia', code: 'LR'}, 
{name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
{name: 'Liechtenstein', code: 'LI'}, 
{name: 'Lithuania', code: 'LT'}, 
{name: 'Luxembourg', code: 'LU'}, 
{name: 'Macao', code: 'MO'}, 
{name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
{name: 'Madagascar', code: 'MG'}, 
{name: 'Malawi', code: 'MW'}, 
{name: 'Malaysia', code: 'MY'}, 
{name: 'Maldives', code: 'MV'}, 
{name: 'Mali', code: 'ML'}, 
{name: 'Malta', code: 'MT'}, 
{name: 'Marshall Islands', code: 'MH'}, 
{name: 'Martinique', code: 'MQ'}, 
{name: 'Mauritania', code: 'MR'}, 
{name: 'Mauritius', code: 'MU'}, 
{name: 'Mayotte', code: 'YT'}, 
{name: 'Mexico', code: 'MX'}, 
{name: 'Micronesia, Federated States of', code: 'FM'}, 
{name: 'Moldova, Republic of', code: 'MD'}, 
{name: 'Monaco', code: 'MC'}, 
{name: 'Mongolia', code: 'MN'}, 
{name: 'Montserrat', code: 'MS'}, 
{name: 'Morocco', code: 'MA'}, 
{name: 'Mozambique', code: 'MZ'}, 
{name: 'Myanmar', code: 'MM'}, 
{name: 'Namibia', code: 'NA'}, 
{name: 'Nauru', code: 'NR'}, 
{name: 'Nepal', code: 'NP'}, 
{name: 'Netherlands', code: 'NL'}, 
{name: 'Netherlands Antilles', code: 'AN'}, 
{name: 'New Caledonia', code: 'NC'}, 
{name: 'New Zealand', code: 'NZ'}, 
{name: 'Nicaragua', code: 'NI'}, 
{name: 'Niger', code: 'NE'}, 
{name: 'Nigeria', code: 'NG'}, 
{name: 'Niue', code: 'NU'}, 
{name: 'Norfolk Island', code: 'NF'}, 
{name: 'Northern Mariana Islands', code: 'MP'}, 
{name: 'Norway', code: 'NO'}, 
{name: 'Oman', code: 'OM'}, 
{name: 'Pakistan', code: 'PK'}, 
{name: 'Palau', code: 'PW'}, 
{name: 'Palestinian Territory, Occupied', code: 'PS'}, 
{name: 'Panama', code: 'PA'}, 
{name: 'Papua New Guinea', code: 'PG'}, 
{name: 'Paraguay', code: 'PY'}, 
{name: 'Peru', code: 'PE'}, 
{name: 'Philippines', code: 'PH'}, 
{name: 'Pitcairn', code: 'PN'}, 
{name: 'Poland', code: 'PL'}, 
{name: 'Portugal', code: 'PT'}, 
{name: 'Puerto Rico', code: 'PR'}, 
{name: 'Qatar', code: 'QA'}, 
{name: 'Reunion', code: 'RE'}, 
{name: 'Romania', code: 'RO'}, 
{name: 'Russian Federation', code: 'RU'}, 
{name: 'RWANDA', code: 'RW'}, 
{name: 'Saint Helena', code: 'SH'}, 
{name: 'Saint Kitts and Nevis', code: 'KN'}, 
{name: 'Saint Lucia', code: 'LC'}, 
{name: 'Saint Pierre and Miquelon', code: 'PM'}, 
{name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
{name: 'Samoa', code: 'WS'}, 
{name: 'San Marino', code: 'SM'}, 
{name: 'Sao Tome and Principe', code: 'ST'}, 
{name: 'Saudi Arabia', code: 'SA'}, 
{name: 'Senegal', code: 'SN'}, 
{name: 'Serbia and Montenegro', code: 'CS'}, 
{name: 'Seychelles', code: 'SC'}, 
{name: 'Sierra Leone', code: 'SL'}, 
{name: 'Singapore', code: 'SG'}, 
{name: 'Slovakia', code: 'SK'}, 
{name: 'Slovenia', code: 'SI'}, 
{name: 'Solomon Islands', code: 'SB'}, 
{name: 'Somalia', code: 'SO'}, 
{name: 'South Africa', code: 'ZA'}, 
{name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
{name: 'Spain', code: 'ES'}, 
{name: 'Sri Lanka', code: 'LK'}, 
{name: 'Sudan', code: 'SD'}, 
{name: 'Suriname', code: 'SR'}, 
{name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
{name: 'Swaziland', code: 'SZ'}, 
{name: 'Sweden', code: 'SE'}, 
{name: 'Switzerland', code: 'CH'}, 
{name: 'Syrian Arab Republic', code: 'SY'}, 
{name: 'Taiwan, Province of China', code: 'TW'}, 
{name: 'Tajikistan', code: 'TJ'}, 
{name: 'Tanzania, United Republic of', code: 'TZ'}, 
{name: 'Thailand', code: 'TH'}, 
{name: 'Timor-Leste', code: 'TL'}, 
{name: 'Togo', code: 'TG'}, 
{name: 'Tokelau', code: 'TK'}, 
{name: 'Tonga', code: 'TO'}, 
{name: 'Trinidad and Tobago', code: 'TT'}, 
{name: 'Tunisia', code: 'TN'}, 
{name: 'Turkey', code: 'TR'}, 
{name: 'Turkmenistan', code: 'TM'}, 
{name: 'Turks and Caicos Islands', code: 'TC'}, 
{name: 'Tuvalu', code: 'TV'}, 
{name: 'Uganda', code: 'UG'}, 
{name: 'Ukraine', code: 'UA'}, 
{name: 'United Arab Emirates', code: 'AE'}, 
{name: 'United Kingdom', code: 'GB'}, 
{name: 'United States', code: 'US'}, 
{name: 'United States Minor Outlying Islands', code: 'UM'}, 
{name: 'Uruguay', code: 'UY'}, 
{name: 'Uzbekistan', code: 'UZ'}, 
{name: 'Vanuatu', code: 'VU'}, 
{name: 'Venezuela', code: 'VE'}, 
{name: 'Viet Nam', code: 'VN'}, 
{name: 'Virgin Islands, British', code: 'VG'}, 
{name: 'Virgin Islands, U.S.', code: 'VI'}, 
{name: 'Wallis and Futuna', code: 'WF'}, 
{name: 'Western Sahara', code: 'EH'}, 
{name: 'Yemen', code: 'YE'}, 
{name: 'Zambia', code: 'ZM'}, 
{name: 'Zimbabwe', code: 'ZW'} 
];
var cities = {"The Hague":{"country":["NL"]},"Cerritos":{"state":["CA"]},"Perugia":{"country":["IT"]},"New Brunswick":{"state":["NJ"]},"Vicenza":{"country":["IT"]},"Sellersville":{"state":["PA"]},"Oakland":{"state":["CA"]},"Chicago":{"state":["IL"]},"Kenosha":{"state":["WI"]},"Milwaukee":{"state":["WI"]},"Evanston":{"state":["IL"]},"Roselle":{"state":["IL"]},"Champaign":{"state":["IL"]},"Carbondale":{"state":["IL"]},"Des Moines":{"state":["IA"]},"Normal":{"state":["IL"]},"Madison":{"state":["WI"]},"Cincinnati":{"state":["OH"]},"Minneapolis":{"state":["MN"]},"Kalamazoo":{"state":["MI"]},"Indianapolis":{"state":["IN"]},"Grinnell":{"state":["IA"]},"Ottawa":{"province":["ON"]},"Ann Arbor":{"state":["MI"]},"Cleveland":{"state":["OH"]},"Hoboken":{"state":["NJ"]},"Cambridge":{"state":["MA"],"country":["UK"]},"Asbury Park":{"state":["NJ"]},"New York":{"state":["NY"]},"Philadelphia":{"state":["PA"]},"Baltimore":{"state":["MD"]},"Washington":{"state":["DC"]},"Columbus":{"state":["OH"]},"Detroit":{"state":["MI"]},"Omaha":{"state":["NE"]},"Kansas City":{"state":["MO","KS"]},"Toledo":{"state":["OH"]},"Toronto":{"province":["ON"]},"Northampton":{"state":["MA"]},"Providence":{"state":["RI"]},"New Haven":{"state":["CT"]},"Montreal":{"province":["QC"]},"Portland":{"state":["ME","OR"]},"Port Chester":{"state":["NY"]},"Richmond":{"state":["VA"],"country":["AU"]},"Carrboro":{"state":["NC"]},"Atlanta":{"state":["GA"]},"Houston":{"state":["TX"]},"Dallas":{"state":["TX"]},"Los Angeles":{"state":["CA"]},"Tempe":{"state":["AZ"]},"West Hollywood":{"state":["CA"]},"San Diego":{"state":["CA"]},"San Francisco":{"state":["CA"]},"Seattle":{"state":["WA"]},"Salt Lake City":{"state":["UT"]},"Denver":{"state":["CO"]},"Rotterdam":{"country":["NL"]},"London":{"country":["UK"]},"Gent":{"country":["BE"]},"Boston":{"state":["MA"]},"Island Park":{"state":["NY"]},"Bloomington":{"state":["IN"]},"Louisville":{"state":["KY"]},"Lexington":{"state":["KY"]},"Nashville":{"state":["TN"]},"Memphis":{"state":["TN"]},"Birmingham":{"state":["AL"],"country":["UK"]},"Athens":{"state":["GA"],"country":["GR"]},"DeKalb":{"state":["IL"]},"Ames":{"state":["IA"]},"E. Lansing":{"state":["MI"]},"Pittsburgh":{"state":["PA"]},"Rochester":{"state":["NY"]},"Burlington":{"state":["VT"]},"Springfield":{"state":["MA","MO"]},"Amherst":{"state":["MA"]},"Troy":{"state":["NY"]},"Syracuse":{"state":["NY"]},"Upper Darby":{"state":["PA"]},"Warwick":{"state":["RI"]},"State College":{"state":["PA"]},"St. Paul":{"state":["MN"]},"St. Louis":{"state":["MO"]},"New Orleans":{"state":["LA"]},"Austin":{"state":["TX"]},"Norman":{"state":["OK"]},"Sacramento":{"state":["CA"]},"Hilversum":{"country":["NL"]},"Brussels":{"country":["BE"]},"Eindhoven":{"country":["NL"]},"Den Haag":{"country":["NL"]},"Amsterdam":{"country":["NL"]},"Lund":{"country":["SE"]},"Copenhagen":{"country":["DK"]},"Hamburg":{"country":["DE"]},"Berlin":{"country":["DE"]},"Koeln":{"country":["DE"]},"Frankfurt":{"country":["DE"]},"Munich":{"country":["DE"]},"Lusanne":{"country":["CH"]},"Paris":{"country":["FR"]},"Newcastle":{"country":["UK"]},"Edinburgh":{"country":["UK"]},"Manchester":{"country":["UK"]},"Bristol":{"country":["UK"]},"Osaka":{"country":["JP"]},"Nagoya":{"country":["JP"]},"Kawasaki":{"country":["JP"]},"Tokyo":{"country":["JP"]},"Honolulu":{"state":["HI"]},"Oklahoma City":{"state":["OK"]},"Rosemont":{"state":["IL"]},"Torhout":{"country":["BE"]},"Werchter":{"country":["BE"]},"Orlando":{"state":["FL"]},"Miami":{"state":["FL"]},"Tampa":{"state":["FL"]},"Reading":{"country":["UK"]},"Duesseldorf":{"country":["DE"]},"Nottingham":{"country":["UK"]},"Barcelona":{"country":["ES"]},"Iowa City":{"state":["IA"]},"Lawrence":{"state":["KS"]},"Columbia":{"state":["SC","MO"]},"Pontiac":{"state":["MI"]},"Oslo":{"country":["NO"]},"Stockholm":{"country":["SE"]},"Dronten":{"country":["NL"]},"Kiewit":{"country":["BE"]},"Ljubijiana":{"country":["SI"]},"Modena":{"country":["IT"]},"Lyon":{"country":["FR"]},"Utrecht":{"country":["NL"]},"Wolverhampton":{"country":["UK"]},"Leeds":{"country":["UK"]},"Liverpool":{"country":["UK"]},"Glasgow":{"country":["UK"]},"Cardiff":{"country":["UK"]},"Southampton":{"country":["UK"]},"Vancouver":{"province":["BC"]},"Hollywood":{"state":["CA"]},"Santa Barbara":{"state":["CA"]},"Scottsdale":{"state":["AZ"]},"Phoenix":{"state":["AZ"]},"Del Mar":{"state":["CA"]},"Fort Lauderdale":{"state":["FL"]},"Gainesville":{"state":["FL"]},"Raleigh":{"state":["NC"]},"Norfolk":{"state":["VA"]},"Gold Coast":{"country":["AU"]},"Melbourne":{"country":["AU"]},"Sydney":{"country":["AU"]},"Adelaide":{"country":["AU"]},"Wellington":{"country":["NZ"]},"Auckland":{"country":["NZ"]},"Perth":{"country":["AU"]},"Davenport":{"state":["IA"]},"Tulsa":{"state":["OK"]},"Lubbock":{"state":["TX"]},"San Antonio":{"state":["TX"]},"Little Rock":{"state":["AR"]},"Oxford":{"state":["MS"]},"Biloxi":{"state":["MS"]},"Tallahassee":{"state":["FL"]},"Salem":{"state":["VA"]},"Williamsburg":{"state":["VA"]},"Buffalo":{"state":["NY"]},"Albany":{"state":["NY"]},"Fitchburg":{"state":["MA"]},"Dayton":{"state":["OH"]},"Nuerburg":{"country":["DE"]},"Landgraaf":{"country":["NL"]},"El Paso":{"state":["TX"]},"Odessa":{"state":["TX"]},"Santa Fe":{"state":["NM"]},"Las Vegas":{"state":["NV"]},"Englewood":{"state":["CO"]},"Bonner Springs":{"state":["KS"]},"Tinley Park":{"state":["IL"]},"Marylnd Heights":{"state":["MO"]},"Clarkston":{"state":["MI"]},"Barrie":{"province":["ON"]},"Burgettstown":{"state":["PA"]},"Saratoga":{"state":["NY","CA"]},"N. Kingston":{"state":["RI"]},"Randalls Island":{"state":["NY"]},"Charles Town":{"state":["WV"]},"Charlotte":{"state":["NC"]},"Mountain View":{"state":["CA"]},"George":{"state":["WA"]},"Carson":{"state":["CA"]},"Dublin":{"country":["IE"]},"Berkshire":{"country":["UK"]},"Peoria":{"state":["IL"]},"Sao Paulo":{"country":["BR"]},"S\u00e3o Paulo":{"country":["BR"]},"Rio de Janeiro":{"country":["BR"]},"Bangkok":{"country":["TH"]},"Singapore":{"country":["SG"]},"Brisbane":{"country":["AU"]},"Hannover":{"country":["DE"]},"Offenbach":{"country":["DE"]},"Stuttgart":{"country":["DE"]},"Muenchen":{"country":["DE"]},"Prague":{"country":["CZ"]},"Wiesen":{"country":["AT"]},"Vienna":{"country":["AT"]},"Graz":{"country":["AT"]},"Perugia":{"country":["IT"]},"Milan":{"country":["IT"]},"Sursee":{"country":["CH"]},"Nantes":{"country":["FR"]},"Lisbon":{"country":["PT"]},"Madrid":{"country":["ES"]},"Christchurch":{"country":["NZ"]},"Saginaw":{"state":["MI"]},"Auburn Hills":{"state":["MI"]},"Hampton":{"state":["VA"]},"Landover":{"state":["MD"]},"Wichita":{"state":["KS"]},"Quebec City":{"province":["QC"]},"E. Rutherford":{"state":["NJ"]},"Winnipeg":{"province":["MB"]},"Saskatoon":{"province":["SK"]},"Edmonton":{"province":["AB"]},"Calgary":{"province":["AB"]},"Moline":{"state":["IL"]},"Grand Rapids":{"state":["MI"]},"Fort Wayne":{"state":["IN"]},"Hartford":{"state":["CT"]},"Worcester":{"state":["MA"]},"Chapel Hill":{"state":["NC"]},"Tampa Bay":{"state":["FL"]},"Lakeland":{"state":["FL"]},"Lafayette":{"state":["LA"]},"Albuquerque":{"state":["NM"]},"Anaheim":{"state":["CA"]},"San Jose":{"state":["CA"]},"Inglewood":{"state":["CA"]},"Reno":{"state":["NV"]},"Billings":{"state":["MT"]},"Rapid City":{"state":["SD"]},"Sioux Falls":{"state":["SD"]},"Cedar Rapids":{"state":["IA"]},"Uniondale":{"state":["NY"]},"St. College":{"state":["PA"]},"Jacksonville":{"state":["FL","OR"]},"Pensacola":{"state":["FL"]},"Glastonbury":{"country":["UK"]},"Roskilde":{"country":["DK"]},"St. Gallen":{"country":["CH"]},"Porto":{"country":["PT"]},"Belfort":{"country":["FR"]},"Warsaw":{"country":["PL"]},"Katowice":{"country":["PL"]},"Fort Worth":{"state":["TX"]},"Genova":{"country":["IT"]},"Cannes":{"country":["FR"]},"Bilbao":{"country":["ES"]},"Rome":{"country":["IT"]},"Moscow":{"country":["RU"]},"Hachioji":{"country":["JP"]},"Cuyahoga Falls":{"state":["OH"]},"Sunrise":{"state":["FL"]},"Mexico City":{"country":["MX"]},"Santiago":{"country":["CL","ES"]},"Buenos Aires":{"country":["AR"]},"Sandy":{"state":["UT"]},"Boise":{"state":["ID"]},"Palo Alto":{"state":["CA"]},"Urbana":{"state":["IL"]},"West Lafayette":{"state":["IN"]},"Kent":{"state":["OH"]},"Fairfax":{"state":["VA"]},"Lowell":{"state":["MA"]},"Greensboro":{"state":["NC"]},"Clearwater":{"state":["FL"]},"Boulder":{"state":["CO"]},"Mesa":{"state":["AZ"]},"Berkeley":{"state":["CA"]},"Yokohama":{"country":["JP"]},"Sendai":{"country":["JP"]},"Hiroshima":{"country":["JP"]},"Fukuoka":{"country":["JP"]},"Seoul":{"country":["KR"]},"Halifax":{"province":["NS"]},"Oberhausen":{"country":["DE"]},"Bologna":{"country":["IT"]},"Marseilles":{"country":["FR"]},"Toulouse":{"country":["FR"]},"Zaragoza":{"country":["ES"]},"San Sebastian":{"country":["ES"]},"Zurich":{"country":["CH"]},"Angers":{"country":["FR"]},"Helsinki":{"country":["FI"]},"Centurion":{"country":["ZA"]},"Durban":{"country":["ZA"]},"Cape Town":{"country":["ZA"]},"Burbank":{"state":["CA"]},"Santa Monica":{"state":["CA"]},"Pomona":{"state":["CA"]},"Santa Ana":{"state":["CA"]},"Towson":{"state":["MD"]},"De Pere":{"state":["WI"]},"Pompano Beach":{"state":["FL"]},"Castle Donington":{"country":["UK"]},"Dresden":{"country":["DE"]},"Nuernberg":{"country":["DE"]},"Villeurbanne":{"country":["FR"]},"St. Poelten":{"country":["AT"]},"Naperville":{"state":["IL"]},"Lakewood":{"state":["OH"]},"Cologne":{"country":["DE"]},"Oakville":{"state":["CA"]},"Kelseyville":{"state":["CA"]},"Woodinville":{"state":["WA"]},"Fortitude Valley":{"country":["AU"]},"Staffordshire":{"country":["UK"]},"Luxembourg City":{"country":["LU"]},"Nickelsdorf":{"country":["AT"]},"Interlaken":{"country":["CH"]},"Asheville":{"state":["NC"]},"Santa Cruz":{"state":["CA"]},"Saint-Malo":{"country":["FR"]},"Colmar":{"country":["FR"]},"Istanbul":{"country":["TR"]},"Beverly Hills":{"state":["CA"]},"Tucson":{"state":["AZ"]},"Ridgefield":{"state":["WA"]},"Orem":{"state":["UT"]},"Morrison":{"state":["CO"]},"Noblesville":{"state":["IN"]},"The Woodlands":{"state":["TX"]},"Grand Prairie":{"state":["TX"]},"Assago":{"country":["IT"]},"Belfast":{"country":["UK"]},"Den Bosch":{"country":["NL"]},"West Melbourne":{"country":["AU"]},"Guadalajara":{"country":["MX"]},"Monterrey":{"country":["MX"]},"Alajuela":{"country":["CR"]},"Hammond":{"state":["IN"]},"Knoxville":{"state":["TN"]},"Charlottesville":{"state":["VA"]},"Boca Raton":{"state":["FL"]},"Atlantic City":{"state":["NJ"]},"Uncasville":{"state":["CT"]},"La Jolla":{"state":["CA"]},"Universal City":{"state":["CA"]},"Visalia":{"state":["CA"]},"Long Beach":{"state":["CA"]},"Pioneertown":{"state":["CA"]}}
function showCountryList(){
	$(".countryList").slideDown();
}
function hideCountryList(){
	$(".countryList").slideUp();
}
function showCityList(){
	$(".cityList").slideDown();
}
function hideCityList(){
	$(".cityList").slideUp();
}
function searchList(searchInput,array,listName){
	$(searchInput).on("keyup",function(){
		var searchField = $(searchInput).val();
		$(listName+" ul").html('');
		var regex = new RegExp(searchField, "i");
		var count = 1;
		if(array==countries){
		$.each(array, function(key, val){
			if ((val.name.search(regex) != -1) || (val.code.search(regex) != -1)) {
				$(listName+" ul").append('<li><a href="#" id="'+val.code+'">'+val.name+'</a></li>')
				count++;
			}
		});
	}else{
		$.each(array, function(key, val){
			if ((key.search(regex) != -1)) {
				$(listName+" ul").append('<li><a href="#" id="'+val.country+'">'+key+','+val.country+'</a></li>')
				count++;
			}
		});
	}
		selectFromList(listName,searchInput);
		if(count==1){
			$(".countryList ul").html('<li><a href="#">Are you sure you heard a country called "'+searchField+'"?</a></li>')
		} 
	});
}
function selectFromList(list,input){
	$(list+" li a").on("click",function(e){
		var text = $(this).text();
		$(input).val(text);
		$(this).parent().parent().parent().slideUp(200);
		e.preventDefault();
	})
	$("body").on("mouseover",list+" li a",function(){
		var text = $(this).text();
		$(input).val(text);
	})
}
function appendList(listName,array){
	$.each(array,function(k,v){
			if(array==countries){
			$(listName+" ul").append('<li><a href="#" id="'+v.code+'">'+v.name+'</a></li>');
		}else{
			if(v.country==undefined){
				$(listName+" ul").append('<li><a href="#" id="'+v.state+'">'+k+','+v.state+'</a></li>');
			}else{
				$(listName+" ul").append('<li><a href="#" id="'+v.country+'">'+k+','+v.country+'</a></li>');
			}
			
		}
		})
}