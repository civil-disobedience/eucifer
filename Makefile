all:
	DISPLAY=:0 sudo chromium-browser --pack-extension=Source --pack-extension-key=EUcifer.pem --user-data-dir=/tmp/eucifer
	sudo chown xavier:xavier Source.crx
	mv Source.crx Eucifer.crx
