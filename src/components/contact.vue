<template>
  <div class="contact-page">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0 p-4">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Contact</li>
      </ol>
    </nav>
    <iframe
        width="100%"
        height="500px"
        frameborder="0" style="border:0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDqajvV0wDw6X1n8SytgDNzwqt0eMAfeWg
            &q=台北101" allowfullscreen>
    </iframe>
    <div class="form-menu p-5 ">
        <h3 class="text-center">Drop Your Message</h3>
        <p class="text-center">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <form class="needs-validation" novalidate>
            <div class="form-row p-2">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="cusName">Name</label>
                        <input type="text" class="form-control " id="cusName" placeholder="Name" required>
                        <div class="invalid-feedback">
                            Please write UserName.
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="cusEmail">Email</label>
                        <input type="email" class="form-control " id="cusEmail" placeholder="Email" required>
                        <div class="invalid-feedback">
                            Please write E-mail.
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="cusPhone">Phone</label>
                        <input type="tel" class="form-control " id="cusPhone" placeholder="Phone" required>
                        <div class="invalid-feedback">
                            Please write Phone.
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="cusCompany">CompanyName</label>
                        <input type="text" class="form-control " id="cusCompany" placeholder="CompanyName" required>
                    </div>
                    <div class="invalid-feedback">
                            Please write CompanyName.
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="cusSubject">Subject</label>
                        <input type="text" class="form-control " id="cusSubject" placeholder="Subject" required>
                        <div class="invalid-feedback">
                            Please write Subject.
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="cusMessage">Message</label>
                        <textarea class="form-control " id="cusMessage" rows="8" required></textarea>
                        <div class="invalid-feedback">
                            Please write Message.
                        </div>
                    </div>
                    <button class="btn btn-success btn-lg" type="submit">Submit</button>
                </div>
            </div>
        </form>
    </div>
  </div>
</template>
<script>
export default {
  data(){
      return{

      }
  },
  created(){

  },
  mounted(){
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
            });
        }, false);
  }
}
</script>
<style lang="scss" scoped>
@import "../css/_breakpoint.scss";
@import "../css/_maincolor.scss";
.contact-page{
    ol.breadcrumb {
    background-color: $main-color;
    li > a {
      color: rgb(44, 44, 44);
    }
    li {
      color: white;
    }
  }
}
</style>