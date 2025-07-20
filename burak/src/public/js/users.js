console.log("Users frontend javascript file");

$(function () {
    $(".member-status").on("change", function (e) {
      const _id = e.target.id,
      memberStatus = $(`#${_id}.member-status`).val();
  
      // TODO: Axios updateChosenUser
      axios
        .post("/admin/user/edit", {
          _id,
          memberStatus,
        })
        .then((response) => {
          console.log("response: ", response);
          const result = response.data;
  
          if (result.data) {
            $(".member-status").blur();
          } else alert("User update failed!");
        })
        .catch((err) => {
          console.log(err);
          alert("User update failed!");
        });
    });
  });
  