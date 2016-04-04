console.log("Sanity Check: JS is working!");

var template;
var $mems;
var allMemories = [];

$(document).ready(function(){

  $mems = $('#mems');


  var source = $('#memory-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/',
    success: handleSuccess,
    error: handleError
  });

  $.ajax({
    method: 'GET',
    url: '/api/profile',
    success: handleSuccess,
    error: handleError
  });

  $('#newMemoryForm').on('submit', function(e) {
    e.preventDefault();
    console.log('new mem serialized', $(this).serializeArray());
    $.ajax({
      method: 'POST',
      url: '/api/memories',
      data: $(this).serializeArray(),
      success: newMemorySuccess,
      error: newMemoryError
    });
  });

  $mems.on('click', '.deleteBtn', function() {
    console.log('clicked delete button to', '/api/memories/'+$(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/memories/'+$(this).attr('data-id'),
      success: deleteMemorySuccess,
      error: deleteMemoryError
    });
  });

  $mems.on('submit', '#updateMemoryForm', function(e) {
    e.preventDefault();
    console.log('new memory');
    $.ajax({
      method: 'PUT',
      url: '/api/memories/'+$(this).attr('data-id'),
      data: $(this).serializeArray(),
      success: newCharacterSuccess,
      error: newCharacterError
    });
  });

});


function render () {
  $mems.empty();
  var memsHtml = template({ Memories: allMemories });
  $mems.append(memsHtml);
}

function handleSuccess(json) {
  allMemories = json;
  render();
}

function handleError(e) {
  console.log('woops');
  $('#mems').text('Houston, we have a problem!');
}

function newMemorySuccess(json) {
  $('#newMemoryForm input').val('');
  allMemories.push(json);
  render();
}

function newMemoryError() {
  console.log('woops new mem!');
}


function updateMemorySuccess(json) {
  $('#updateMemoryForm input').val('');
  allMemories.push(json);
  render();
}

function updateMemoryError() {
  console.log('woops new mem!');
}

function deleteMemorySuccess(json) {
  var memory = json;
  console.log(json);
  var memoryId = memory._id;
  console.log('delete memory', memoryId);

  for(var i = 0; i < allmemories.length; i++) {
    if(allmemories[i]._id === memoryId) {
      allMemories.splice(index, 1);
      break;
    }
  }
  render();
}

function deleteMemoryError() {
  console.log('delete memory error!');
}
