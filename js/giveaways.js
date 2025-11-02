let currentGiveawayId = null;

// Countdown timer for Christmas 2025 giveaway
function updateCountdown() {
    const christmas = new Date('December 25, 2025 23:59:59').getTime();
    const now = new Date().getTime();
    const distance = christmas - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    if (distance < 0) {
        clearInterval(countdownTimer);
        if (countdownElement) {
            countdownElement.innerHTML = "Giveaway Ended!";
        }
    }
}

// Start countdown timer
const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

function openGiveawayModal(giveawayId) {
    currentGiveawayId = giveawayId;
    document.getElementById('giveawayModal').style.display = 'block';
    
    if (giveawayId === 'christmas') {
        document.getElementById('modalTitle').textContent = '🎄 Enter Christmas Robux Giveaway 🎄';
    } else {
        const titles = {
            1: 'Enter CS2 Premium Package Giveaway',
            2: 'Enter $50 Steam Gift Card Giveaway',
            3: 'Enter Gaming Headset Bundle Giveaway'
        };
        document.getElementById('modalTitle').textContent = titles[giveawayId] || 'Enter Giveaway';
    }
}

function closeGiveawayModal() {
    document.getElementById('giveawayModal').style.display = 'none';
    document.getElementById('giveawayForm').reset();
}

// Handle form submission
document.getElementById('giveawayForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        giveawayId: currentGiveawayId,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
        robloxUsername: document.getElementById('robloxUsername').value,
        bonusEntries: {
            subscribeKreek: document.getElementById('subscribeKreek').checked,
            followTwitter: document.getElementById('followTwitter').checked,
            joinDiscord: document.getElementById('joinDiscord').checked,
            sharedGiveaway: document.getElementById('sharedGiveaway').checked
        }
    };
    
    // Calculate bonus entries
    let totalEntries = 1; // Base entry
    if (formData.bonusEntries.subscribeKreek) totalEntries += 5;
    if (formData.bonusEntries.followTwitter) totalEntries += 3;
    if (formData.bonusEntries.joinDiscord) totalEntries += 2;
    if (formData.bonusEntries.sharedGiveaway) totalEntries += 1;
    
    // Here you would typically send this data to your backend
    console.log('Giveaway entry data:', formData);
    console.log('Total entries:', totalEntries);
    
    // Show success message
    if (currentGiveawayId === 'christmas') {
        alert(`🎉 Successfully entered the Christmas Robux Giveaway! 🎉\n\nYou have ${totalEntries} total entries!\n\nGood luck! Winners will be announced on Christmas Day 2025!`);
    } else {
        alert('Successfully entered the giveaway! Good luck!');
    }
    
    closeGiveawayModal();
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('giveawayModal');
    if (e.target === modal) {
        closeGiveawayModal();
    }
});