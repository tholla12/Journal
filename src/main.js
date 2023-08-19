import Entry from './journal.js';
import { displayEntryCard } from './journal';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './css/styles.css';

$(document).ready(function () {
  $("#journalForm").submit(function (event) {
    event.preventDefault();
    const title = $('#title').val();
    const body = $('#body').val();
    const newEntry = new Entry(title, body);
    displayEntryCard(newEntry);
    $('#title').val('');
    $('#body').val('');
  });
});
