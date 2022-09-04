<template>
  <!-- container  -->
  <div class="w-10/12 max-w-xl m-auto pt-8 pb-2.5">
    <h1 class="my-7">RSVP for MySQL Reseller Sales Recruitment Workshop</h1>
    <form action="">
      <ul>
        <li class="flex flex-col">
          <label for="company" class="inline-block px-1 mb-2.5"
            >Company <span class="text-red-500 ml-1.5">*</span></label
          >
          <input
            type="text"
            id="company"
            class="inline-block border-solid border border-[#ccc] shadow-inner shadow-[0px_1px_2px_rgba(204,204,204/ 0.05)]"
          />
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
</template>

<script>
export default {};
</script>

<style></style>
