<?php
$file = 'start_date.txt';

// Handle reset request
if (isset($_GET['reset'])) {
    // Use a special command to allow reset
    if ($_GET['reset'] == 'fords-are-gay') {
        $new_start_date = date('Y-m-d');
        file_put_contents($file, $new_start_date);
        echo 'Timer reset';
        exit;
    } else {
        echo 'Invalid command';
        exit;
    }
}

// Read the current start date from the file
if (file_exists($file)) {
    $start_date = file_get_contents($file);
} else {
    $start_date = date('Y-m-d');
    file_put_contents($file, $start_date);
}

echo $start_date;
?>
