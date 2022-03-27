function test_it(entry) {
  if (entry.value!=null && entry.value.length!=0) {
  entry.value=""+ eval(entry.value);
  }
  computeForm(entry.form);
}

function computeForm(form) {
  var total=0

  for (var count=0; count<4; count++) {
    if (form.a[count].checked){
      var total=total+parseInt(form.a[count].value);
    }
  }

  for (var count=0; count<4; count++) {
    if (form.b[count].checked){
      var total=total+parseInt(form.b[count].value);
    }
  }

  for (var count=0; count<4; count++) {
    if (form.c[count].checked){
      var total=total+parseInt(form.c[count].value);
    }
  }

  for (var count=0; count<4; count++) {
    if (form.d[count].checked){
      var total=total+parseInt(form.d[count].value);
    }
  }

  for (var count=0; count<4; count++) {
    if (form.e[count].checked){
      var total=total+parseInt(form.e[count].value);
    }
  }

  for (var count=0; count<4; count++) {
    if (form.f[count].checked){
      var total=total+parseInt(form.f[count].value);
    }
  }

  for (var count=0; count<4; count++) {
    if (form.g[count].checked){
      var total=total+parseInt(form.g[count].value);
    }
  }

  for (var count=0; count<4; count++) {
    if (form.h[count].checked){
      var total=total+parseInt(form.h[count].value);
    }
  }

  for (var count=0; count<4; count++) {
    if (form.i[count].checked){
      var total=total+parseInt(form.i[count].value);
    }
  }

  for (var count=0; count<4; count++) {
    if (form.j[count].checked){
      var total=total+parseInt(form.j[count].value);
    }
  }

  if (total<10){ window.location="deptestresult1.html" }
  else if (total<15){ window.location="deptestresult2.html" }
  else if (total<20){ window.location="deptestresult3.html" }
  else { window.location="deptestresult4.html" }
}
