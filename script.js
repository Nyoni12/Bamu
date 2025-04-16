// Flatpickr setup
flatpickr("#date", {
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
  disable: [
    "2025-04-17", // example of a booked day
    function(date) {
      // Disable weekends
      return (date.getDay() === 0 || date.getDay() === 6);
    }
  ],
  onChange: function(selectedDates, dateStr) {
    const timeSelect = document.getElementById("time");
    timeSelect.innerHTML = '<option value="">-- Select a Time Slot --</option>';

    const availableSlots = [
      "09:00 AM - 10:00 AM",
      "10:30 AM - 11:30 AM",
      "02:00 PM - 03:00 PM"
    ];

    // Simulate booked slot on 2025-04-18 at 10:30 AM
    let booked = dateStr === "2025-04-18" ? "10:30 AM - 11:30 AM" : "";

    availableSlots.forEach(slot => {
      if (slot !== booked) {
        const option = document.createElement("option");
        option.value = slot;
        option.textContent = slot;
        timeSelect.appendChild(option);
      }
    });
  }
});
