<script>
        document.getElementById('calculateBtn').addEventListener('click', () => {
            document.querySelectorAll('.error-icon').forEach(icon => icon.style.display = 'none');
            var isValid = ['grossIncome', 'extraIncome', 'deductions'].every(field => {
                if (isNaN(parseFloat(document.getElementById(field).value))) {
                    document.getElementById(field'Error').style.display = 'inline'; return false;
                }
                return true;
            });
            if (document.getElementById('age').value === '') {
                document.getElementById('ageError').style.display = 'inline';
                isValid = false;
            }
            if (!isValid) return;
            var [gross, extra, deduct, age] = ['grossIncome', 'extraIncome', 'deductions', 'age'].map(field => parseFloat(document.getElementById(field).value));
            var taxable = gross + extra - deduct;
            var rate = (age === "<40") ? 0.3 : (age === "≥ 40 &lt; 60") ? 0.4 : 0.1;
            var tax = (taxable > 800000) ? rate * (taxable - 800000) : 0;
            document.getElementById('finalTax').textContent = `Tax Amount: ${tax.toFixed(2)} Lakhs`;
            document.getElementById('modal').style.display = 'block';
        });
        document.querySelector('.close').addEventListener('click', () => document.getElementById('modal').style.display = 'none');
    </script>

