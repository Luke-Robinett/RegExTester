$(document).ready(function () {

    $('#submit-button').click(function () {
        const regexString = $('#regex-input').val();
        const testString = $('#test-input').val();

        if (!regexString && !testString) {
            $('#result').html('Please enter a regular expression and a test string.');
            return;
        }

        if (!regexString) {
            $('#result').html('Please enter a regular expression.');
            return;
        }

        if (!testString) {
            $('#result').html('Please enter a test string.');
            return;
        }

        try {
            const regex = new RegExp(regexString);
            const result = regex.test(testString);
            $('#result').html(result ? 'True' : 'False');
        } catch (error) {
            $('#result').html('Invalid regular expression.');
        }
    });

    $('#clear-button').click(function () {
        $('#regex-input').val('');
        $('#test-input').val('');
        $('#result').html('');
    });

});
