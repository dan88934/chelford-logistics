document.getElementById('order-status-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const orderNumber = document.getElementById('order-number').value;
    const csrfToken = document.querySelector('input[name="csrf_token"]').value;

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure it: POST-request for the URL /search
    xhr.open('POST', '/search', true);

    // Set up the request headers
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-CSRFToken', csrfToken);

    // Handle the response
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                try {
                    var data = JSON.parse(xhr.responseText);
                    console.log(data)
                    // Check if data contains the necessary order information
                    if (data) {
                        // Create a table to display the order information
                        let orderDetailsHtml = `
    <style>
        .order-details-table {
            width: 80%;
            margin: 20px auto; /* Center the table horizontally and add margin */
            border-collapse: collapse; /* Collapse borders to avoid double borders */
            border: 2px solid #ddd; /* Light gray border */
            padding-bottom: 30px; /* Padding at the bottom to add space */
        }
        .order-details-table th, .order-details-table td {
            border: 1px solid #ddd; /* Light gray border for cells */
            padding: 10px; /* Padding inside cells */
            text-align: left; /* Align text to the left */
        }
        .order-details-table th {
            background-color: #f4f4f4; /* Light gray background for headers */
            text-align: center; /* Center header text */
        }
        .order-details-container {
            padding-bottom: 30px; /* Add padding below the table to prevent overlap with the map */
        }
    </style>
    <div class="order-details-container">
        <table class="order-details-table">
            <tr>
                <th>Field</th>
                <th>Details</th>
            </tr>
            <tr>
                <td>Tracking Number</td>
                <td>${data.tracking_reference}</td>
            </tr>
            <tr>
                <td>Ordered At</td>
                <td>${data.updated}</td>
            </tr>
            <tr>
                <td>Sender</td>
                <td>${data.sender_name}</td>
            </tr>
            <tr>
                <td>Recipient</td>
                <td>${data.recipient_name}</td>
            </tr>
            <tr>
                <td>Despatch Date</td>
                <td>${data.despatch_date}</td>
            </tr>
            <tr>
                <td>Package Value</td>
                <td>£${data.package_value}</td>
            </tr>
            <tr>
                <td>Contents Declaration</td>
                <td>${data.contents_declaration}</td>
            </tr>
            <tr>
                <td>Insurance Included</td>
                <td>${data.insurance === 'on' ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
                <td>Final Insurance Charge</td>
                <td>£${data.final_insurance_charge}</td>
            </tr>
            <tr>
                <td>Insurance Premium Tax</td>
                <td>£${data.insurance_premium_tax}</td>
            </tr>
        </table>
    </div>
`;

                        document.getElementById('order-details-container').innerHTML = orderDetailsHtml;
                    } else {
                        // Handle case where order details are not found
                        document.getElementById('order-details-container').innerHTML = '<p>Order not found.</p>';
                    }
                } catch (error) {
                    console.error('Error parsing response:', error);
                    document.getElementById('order-details-container').innerHTML = '<p>Error parsing order details.</p>';
                }
            } else {
                console.error('Request failed:', xhr.status, xhr.statusText);
                document.getElementById('order-details-container').innerHTML = '<p>Error fetching order details.</p>';
            }
        }
    };

    // Send the request with the JSON payload
    xhr.send(JSON.stringify({ tracking_reference: orderNumber }));
});
