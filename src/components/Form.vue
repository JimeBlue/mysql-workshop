<template>
  <section>
    <div>
      <h1>RSVP for MySQL Reseller Sales Recruitment Workshop</h1>
      <form action="">
        <ul>
          <li>
            <label for="company">Company <span>*</span></label>
            <input type="text" id="company" />
          </li>
          <li>
            <label for="title">Name<span>*</span></label>
            <div>
              <select name="prefix" id="prefix">
                <option value="Mr">Mr.</option>
                <option value="Ms">Ms.</option>
              </select>
              <label>Prefix</label>
            </div>
            <div>
              <input type="text" id="first-name" />
              <label for="first-name">First Name</label>
            </div>
            <div>
              <input type="text" id="last-name" />
              <label for="last-name">Last Name</label>
            </div>
          </li>
          <li>
            <label for="job">Job Title <span>*</span></label>
            <div>
              <input type="text" id="job-title" />
              <label for="job-title">(eg Executive, Manger, etc.)</label>
            </div>
          </li>
          <li>
            <label for="email">Email<span>*</span> </label>
            <div>
              <input type="email" placeholder="ex: myname@example.com" />
            </div>
          </li>
          <li>
            <label for="">Mobile Phone<span>*</span> </label>
            <div>
              <input type="tel" id="area-code" />
              <label for="area-code">(EX. 012,013)</label>
            </div>
            <span>-</span>
            <div>
              <input type="tel" id="phone-number" />
              <label for="phone-number">(Last 7 Digit)</label>
            </div>
          </li>
        </ul>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
