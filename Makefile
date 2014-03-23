all:
	DISPLAY=:0 sudo chromium-browser --pack-extension=chromium --pack-extension-key=EUcifer.pem --user-data-dir=/tmp/eucifer
	sudo chown xavier:xavier chromium.crx
	mv chromium.crx Eucifer.crx
