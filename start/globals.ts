/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import View from "@ioc:Adonis/Core/View";
import Roles from "../app/Enums/Roles";

View.global("Roles", Roles);
