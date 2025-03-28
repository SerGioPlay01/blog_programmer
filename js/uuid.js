function generateUUID() {
    // Generate a UUID (v4 format)
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });

    // Display UUID in the container
    document.getElementById("uuidContainer").textContent = uuid;
  }