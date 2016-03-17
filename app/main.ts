import {bootstrap}    from 'angular2/platform/browser';
import {ExpenseApp} from './expense_app.component';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(ExpenseApp, [HTTP_PROVIDERS]);
